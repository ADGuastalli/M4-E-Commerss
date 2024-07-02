"use client";

import React, { useContext } from "react";
import Card from "./card";
import styles from "./style.module.css";
import { ProductContext } from "@/context/produc";

function Cards() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div className={styles.conteiner}>
        {products.map((product: any) => (
          <Card key={product.id.toString()} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
