import { createContext, useState } from "react";

import { ProductTypes } from "@/types/products";

type CartContextType = {
  products: ProductTypes[];
  increase: (product: ProductTypes) => void;
  decrease: (product: ProductTypes) => void;
  addToCart: (product: ProductTypes) => void;
  removeToCart: (product: ProductTypes) => void;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const increase = (product: ProductTypes) => {
    setProducts((previousState) =>
      previousState.map((el) =>
        el.id === product.id
          ? {
              ...el,
              count: el.count + 1,
            }
          : el
      )
    );
  };

  const decrease = (product: ProductTypes) => {
    setProducts((previousState) =>
      previousState.map((el) =>
        el.id === product.id
          ? {
              ...el,
              count: el.count > 0 ? el.count - 1 : 1,
            }
          : el
      )
    );
  };

  const addToCart = (product: ProductTypes) => {
    setProducts((previousState) =>
      previousState.find((el) => el.id === product.id)
        ? previousState.map((el) =>
            el.id === product.id ? { ...el, count: el.count + 1 } : el
          )
        : [...previousState, { ...product, count: 1 }]
    );
  };

  const removeToCart = (product: ProductTypes) => {
    setProducts((previousState) =>
      previousState.filter((el) => el.id !== product.id)
    );
  };

  return (
    <CartContext.Provider
      value={{ products, increase, decrease, addToCart, removeToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
