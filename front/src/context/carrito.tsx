"use client";

import { createContext, useEffect, useState } from "react";
import { ICartContextType, IProduct } from "@/interfece/Interface";
import axios from "axios";

const addItem = async (
  cartItems: IProduct[],
  product: number
): Promise<IProduct[]> => {
  const existingProduct = cartItems.find((item) => item.id === product);

  if (existingProduct) {
    return cartItems;
  }

  try {
    const response = await axios.get<IProduct>(
      `m4-e-commerss.vercel.app/products/${product}`
    );
    const data = response.data;
    const updatedCart = [...cartItems, data];
    return updatedCart;
  } catch (error) {
    console.error("Error fetching product:", error);
    return cartItems;
  }
};

const removeItem = (cartItems: IProduct[], product: number) => {
  return cartItems.filter((item) => item.id !== product);
};

export const CarritoContext = createContext<ICartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
  proccedToCheckout: () => {},
});

const checkout = async (CartItems: IProduct[]) => {
  try {
    const products = CartItems.map((item) => item.id);
    const token = localStorage.getItem("token");
    const response = await fetch("m4-e-commerss.vercel.app/orders", {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products }),
    });
    if (response.ok) {
      console.log("success");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const CarritoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = async (product: number) => {
    const updatedCart = await addItem(cartItems, product);
    setCartItems(updatedCart);
  };

  const removeFromCart = (product: number) => {
    setCartItems(removeItem(cartItems, product));
  };

  const proccedToCheckout = () => {
    checkout(cartItems);
    setCartItems([]);
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [cartItems]);

  return (
    <CarritoContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        total,
        proccedToCheckout,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
