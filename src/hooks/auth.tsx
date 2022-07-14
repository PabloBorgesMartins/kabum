import React, {
  createContext, useCallback, useState, useContext, useEffect, ReactNode,
} from 'react';

/*Interfaces*/
import {
  IAuthState,
  ISignInCredentials,
  ISignUpCredentials,
  IUserProps,
} from '../interfaces/auth'

interface AuthContextData {
  user: IUserProps;
  token: string;
  authLoading: boolean;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signUp(credentials: ISignUpCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      setAuthLoading(true);
      const user = await localStorage.getItem('@kabum:user');
      const token = await localStorage.getItem('@kabum:token');

      if (token && user) {
        setData({ token, user: JSON.parse(user) });
      }

      setAuthLoading(false);
    }
    loadStoragedData();
  }, []);


  const signIn = useCallback(async (data: ISignInCredentials) => {
    setAuthLoading(true);
    try {
      let response = {
        user: {
          id: 1,
          name: "Jhon",
          lastName: "Doe",
          email: data.email,
          image: "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
        },
        token: "hhhhhhhhhhhhhhh"
      }

      await localStorage.setItem('@kabum:user', JSON.stringify(response.user));
      await localStorage.setItem('@kabum:token', response.token);

      setData({ token: response.token, user: response.user });
      setAuthLoading(false);
    } catch (error) {
      setAuthLoading(false);
      throw error;
    }
  }, []);

  const signUp = useCallback(async (data: ISignUpCredentials) => {
    try {
      let response = {
        user: {
          id: 1,
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          image: data.image
        },
        token: "hhhhhhhhhhhhhhh"
      }

      await localStorage.setItem('@kabum:user', JSON.stringify(response.user));
      await localStorage.setItem('@kabum:token', response.token);

      setData({ token: response.token, user: response.user });
      setAuthLoading(false);
    } catch (error) {
      setAuthLoading(false);
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    setAuthLoading(true);
    await localStorage.removeItem('@kabum:user');
    await localStorage.removeItem('@kabum:token');

    setData({} as IAuthState);
    setAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      user: data.user,
      token: data.token,
      authLoading,
      signIn,
      signUp,
      signOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
