import React,
{
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';
import { COLLECTION_USERS } from '../configs/database';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  //firstName: string;
  //avatar: string;
  //token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}



export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}`;
      //console.log(authUrl);

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
      //console.log(response); 


      if (type === "success" && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');

        const name = userInfo.data.name.split('')[0];
        //userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
        //console.log(userInfo);

        const userData = {
          ...userInfo.data,
          name,
          id: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }

    } catch (error) {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function singOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);

  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.id}`;

      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  })

  return (
    <AuthContext.Provider value={{
      user,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}
