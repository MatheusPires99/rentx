import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { STORAGE_KEY } from '../constants';
import { api } from '../services';
import { SignInCredencials, SignUpCredencials } from '../types';

type User = {
  name: string;
  email: string;
  cnh: string;
  hasOnboarding?: boolean;
};

type AuthState = {
  user: User;
  token: string;
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn(credencials: SignInCredencials): Promise<void>;
  signUp(credencials: SignUpCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        `${STORAGE_KEY}:token`,
        `${STORAGE_KEY}:user`,
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredencials) => {
    const response = await api.post('/login', { email, password });

    await AsyncStorage.setItem(
      `${STORAGE_KEY}:token`,
      response.data.accessToken,
    );
  }, []);

  const signUp = useCallback(async (userCredentials: SignUpCredencials) => {
    const { name, email, cnh, password } = userCredentials;

    const response = await api.post('/users', { name, email, cnh, password });

    await AsyncStorage.multiSet([
      [`${STORAGE_KEY}:token`, response.data.accessToken],
      [`${STORAGE_KEY}:user`, JSON.stringify({ name, email, cnh })],
    ]);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem(`${STORAGE_KEY}:user`);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem(`${STORAGE_KEY}:user`, JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  api.interceptors.response.use(
    response => response,
    async err => {
      if (err.response.status === 401) {
        signOut();
      }

      throw err;
    },
  );

  // console.log(data.user);

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signUp, signOut, updateUser }}
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
