import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
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
  hasOnboarding: boolean;
};

type UpdateUser = {
  user?: User;
  hasOnboarding?: boolean;
};

type AuthContextData = {
  user: User;
  userHasOnboarding: boolean;
  loading: boolean;
  signIn(credencials: SignInCredencials): Promise<void>;
  signUp(credencials: SignUpCredencials): Promise<void>;
  signOut(): void;
  updateUser({ user, hasOnboarding }: UpdateUser): Promise<void>;
};

const setApiAuthorization = (accessToken: string) => {
  api.defaults.headers.authorization = `Bearer ${accessToken}`;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [accessToken, user, hasOnboarding] = await AsyncStorage.multiGet([
        `${STORAGE_KEY}:accessToken`,
        `${STORAGE_KEY}:user`,
        `${STORAGE_KEY}:onboarding`,
      ]);

      if (accessToken[1] && user[1] && hasOnboarding[1]) {
        setApiAuthorization(accessToken[1]);

        setData({
          accessToken: accessToken[1],
          user: JSON.parse(user[1]),
          hasOnboarding: JSON.parse(hasOnboarding[1]),
        });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCredencials) => {
      try {
        const { accessToken, user } = await loginUser(email, password);

        setApiAuthorization(accessToken);

        setData({
          user,
          accessToken,
          hasOnboarding: data.hasOnboarding,
        });
      } catch (err) {
        Alert.alert(
          'Erro ao fazer login',
          'Ocorreu um erro ao fazer o login, tente novamente.',
        );
      }
    },
    [data.hasOnboarding],
  );

  const signUp = useCallback(
    async (userCredentials: SignUpCredencials) => {
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
          hasOnboarding: data.hasOnboarding,
        });
      } catch (err) {
        Alert.alert(
          'Erro ao cadastrar',
          'Ocorreu um erro ao realizar seu cadastro, tente novamente.',
        );
      }
    },
    [data.hasOnboarding],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      `${STORAGE_KEY}:accessToken`,
      `${STORAGE_KEY}:user`,
    ]);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async ({ user, hasOnboarding }: UpdateUser) => {
      if (user) {
        await AsyncStorage.setItem(`${STORAGE_KEY}:user`, JSON.stringify(user));
      }

      if (hasOnboarding) {
        await AsyncStorage.setItem(
          `${STORAGE_KEY}:hasOnboarding`,
          JSON.stringify(hasOnboarding),
        );
      }

      setData({
        accessToken: data.accessToken,
        user: user || data.user,
        hasOnboarding: hasOnboarding || data.hasOnboarding,
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
        userHasOnboarding: data.hasOnboarding,
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
