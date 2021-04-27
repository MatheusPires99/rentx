import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { STORAGE_KEY } from '../constants';
import { api } from '../services';
import { SignInCredencials, SignUpCredencials } from '../types';
import { loginUser, createUser } from '../services/users';

type User = {
  name: string;
  email: string;
  cnh: string;
};

type AuthState = {
  user: User;
  accessToken: string;
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn(credencials: SignInCredencials): Promise<void>;
  signUp(credencials: SignUpCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
};

type AithProviderProps = {
  children: ReactNode;
};

const setApiAuthorization = (accessToken: string) => {
  api.defaults.headers.authorization = `Bearer ${accessToken}`;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AithProviderProps) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const [accessToken, user] = await AsyncStorage.multiGet([
        `${STORAGE_KEY}:accessToken`,
        `${STORAGE_KEY}:user`,
      ]);

      if (accessToken[1] && user[1]) {
        setApiAuthorization(accessToken[1]);

        setData({
          accessToken: accessToken[1],
          user: JSON.parse(user[1]),
        });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredencials) => {
    try {
      const { accessToken, user } = await loginUser(email, password);

      setApiAuthorization(accessToken);

      setData({
        user,
        accessToken,
      });
    } catch (err) {
      Alert.alert(
        'Erro ao fazer login',
        'Ocorreu um erro ao fazer o login, tente novamente.',
      );
    }
  }, []);

  const signUp = useCallback(async (userCredentials: SignUpCredencials) => {
    try {
      const { name, email, cnh, password } = userCredentials;

      const { accessToken, user } = await createUser(
        name,
        email,
        cnh,
        password,
      );

      setApiAuthorization(accessToken);

      setData({
        user,
        accessToken,
      });
    } catch (err) {
      Alert.alert(
        'Erro ao cadastrar',
        'Ocorreu um erro ao realizar seu cadastro, tente novamente.',
      );
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      `${STORAGE_KEY}:accessToken`,
      `${STORAGE_KEY}:user`,
    ]);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      if (user) {
        await AsyncStorage.setItem(`${STORAGE_KEY}:user`, JSON.stringify(user));
      }

      setData({
        accessToken: data.accessToken,
        user: user || data.user,
      });
    },
    [setData, data],
  );

  api.interceptors.response.use(
    response => response,
    async err => {
      if (err?.response?.status === 401) {
        signOut();
      }

      throw err;
    },
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
