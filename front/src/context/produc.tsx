"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext({ products: [] });

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://proyecto-m4-front.onrender.com/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
