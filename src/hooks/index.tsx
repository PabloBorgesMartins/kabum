import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { CartProvider } from './cart';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  );
};

export default AppProvider;
