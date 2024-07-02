"use client";

import { IProduct } from "@/interfece/Interface";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

const Card: React.FC<IProduct> = ({ name, price, image, id }) => {
  const src: string = image;

  return (
    <div className={styles.card}>
      <h2 className="font-bold text-xl">{name}</h2>
      <h4 className="font-bold text-md">Precio: ${price}</h4>
      <Link href={`/detail/${id}`}>
        <div className="relative object-contain w-40 h-40 m-4 flex">
          <Image
            src={src}
            className={styles.image}
            alt="product"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className={styles.buttoncontainer}>
          <button className="buttonPrincipal">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mr-2">Detalle</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
