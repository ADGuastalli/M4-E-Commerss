"use client";
import Carritoo from "@/components/Carrito";
import React from "react";
import styles from "./carrito.module.css";

function Carrito() {
  return (
    <div className="grid grid-rows-1 justify-center items-center mt-5 mb-96">
      <div className={styles.conteiner}>
        <div>
          <h1 className="font-bold text-4xl mt-5s">Shopping cart</h1>
        </div>
        <div className={styles.columnas}>
          <div>
            <span className="font-bold text-xl">Product</span>
          </div>
          <div>
            <span className="font-bold text-xl">Name</span>
          </div>
          <div>
            <span className="font-bold text-xl">Price</span>
          </div>
          <div>
            <span className="font-bold text-xl">Delete</span>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <Carritoo />
      </div>
    </div>
  );
}

export default Carrito;
