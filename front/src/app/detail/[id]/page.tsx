"use client";
import Link from "next/link";
import styles from "../../../components/cards/style.module.css";
import { ferchProductById } from "../../../server/fetchProducts";
import AddToCart from "@/components/addToCart";
import { UserContext } from "@/context/userContex";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "@/interfece/Interface";

function EventDetail({ params }: { params: { id: string } }) {
  const { isLogged } = useContext(UserContext);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProduct = await ferchProductById(params.id);
      setProduct(fetchedProduct);
    };

    fetchData();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-wrap justify-center items-center p-5 md:p-10">
      <div className="mr-20">
        <Link href="/home">
          <button className="buttonPrincipal">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
                fill="#000000"
              />
            </svg>

            <span className="mr-2">View More Products</span>
          </button>
        </Link>
      </div>
      <div className={styles.card}>
        <h2 className="font-bold text-xl">{product?.name}</h2>
        <h4 className="font-bold text-md">Price: ${product?.price}</h4>
        <p className="font-bold text-md">Available Stock:{product?.stock}u.</p>
        <p className={styles.description}>{product?.description}</p>
        <Image
          src={product?.image}
          alt="product"
          className={styles.image}
          width={400}
          height={400}
        />
        {isLogged ? (
          <form>
            <AddToCart id={product?.id} />
          </form>
        ) : null}
      </div>
      <div className="ml-20">
        {isLogged ? (
          <Link href="/carrito">
            <button className="buttonPrincipal">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mr-2">Go to My Shopping Cart</span>
            </button>
          </Link>
        ) : null}
      </div>
      <div>
        {!isLogged ? (
          <Link href="/register-login">
            <button className="buttonPrincipal">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9-4-4m4 4-4 4m4-4H5"
                />
              </svg>
              <span className="mr-2">Log In to Purchase</span>
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default EventDetail;
