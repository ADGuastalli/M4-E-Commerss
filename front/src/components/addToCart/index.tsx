"use client";

import { useContext, useState } from "react";
import { CarritoContext } from "../../context/carrito";
import style from "../cards/style.module.css";

function AddToCart({ id }: { id: number }) {
  const { addToCart, cartItems } = useContext(CarritoContext);
  const [added, setAdded] = useState(false);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    addToCart(id);
    setAdded(true);
  }
  const existingProduct = cartItems.find((item) => item.id === id);

  return (
    <div className={style.buttoncontainer}>
      {added || existingProduct ? (
        <p className="text-lime-500 font-bold text-lg bg-gray-100/50 p-3 rounded-lg">
          Product added to shopping cart
        </p>
      ) : (
        <div>
          <button
            type="button"
            onClick={handleClick}
            className="buttonPrincipal"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mr-2">Add to Shopping Cart</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
