"use client";

import React, { useContext, useState } from "react";
import Card from "./card";
import styles from "./style.module.css";
import { ProductContext } from "@/context/produc";

function Cards() {
  const { products } = useContext(ProductContext);
  const { filteredProducts, searchProducts } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    searchProducts(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-row justify-center mt-5 sm:mt-10">
        <input
          value={search}
          className="border-2 border-white text-white font-bold rounded-md bg-slate-400/50 focus:border-red"
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
      <div className={styles.conteiner}>
        {filteredProducts.map((product: any) => (
          <Card key={product.id.toString()} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
