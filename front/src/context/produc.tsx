"use client";

import { createContext, useEffect, useState } from "react";
import { IProduct, IProductContextType } from "@/interfece/Interface";
import axios from "axios";

export const ProductContext = createContext<IProductContextType>({
  products: [],
  filteredProducts: [],
  searchProducts: () => {},
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://m4-mio.onrender.com/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    getProducts();
  }, []);

  const searchProducts = (search: string) => {
    const filtered = products.filter((product: IProduct) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider
      value={{ products, filteredProducts, searchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
