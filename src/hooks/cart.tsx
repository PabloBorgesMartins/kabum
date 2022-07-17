import React, {
  createContext, useCallback, useState, useContext, ReactNode,
} from 'react';

/*Interfaces*/
import {
  IProduct
} from '../interfaces/product';

interface CartContextData {
  products: IProduct[];
  addProductToCart: (data: IProduct) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const addProductToCart = useCallback(async (data: IProduct) => {
    setProducts([...products, data]);
  }, [products, setProducts]);
  
  return (
    <CartContext.Provider value={{
      products,
      addProductToCart
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
