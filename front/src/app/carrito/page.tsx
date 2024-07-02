"use client";
import Carritoo from "@/components/Carrito";
import React from "react";
import styles from "./carrito.module.css";

function Carrito() {
  return (
    <div>
      <div className={styles.conteiner}>
        <div>
          <h1 className="font-bold text-4xl mt-5s">Carrito</h1>
        </div>
        <div className={styles.columnas}>
          <div>
            <span className="font-bold text-xl">Producto</span>
          </div>
          <div>
            <span className="font-bold text-xl">Nombre</span>
          </div>
          <div>
            <span className="font-bold text-xl">Precio</span>
          </div>
          <div>
            <span className="font-bold text-xl">Eliminar</span>
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
