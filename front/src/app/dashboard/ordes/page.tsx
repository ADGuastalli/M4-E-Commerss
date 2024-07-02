"use client";

import { UserContext } from "@/context/userContex";
import { useContext, useEffect } from "react";
import { IProduct } from "@/interfece/Interface";
import Image from "next/image";

function Orders() {
  const userContext = useContext(UserContext);

  const { orders, getOrders } = userContext;

  useEffect(() => {
    getOrders();
  }, []);

  console.log(orders);

  if (!userContext) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-3xl mb-5">
        Órdenes Realizadas con Éxito:{" "}
      </h1>

      {orders?.length === 0 && <p>No tienes ordenes realizadas</p>}

      <ul className="flex flex-wrap justify-center">
        {orders?.map((order: any) => (
          <div
            key={order.id}
            className="w-full sm:w-auto p-6 bg-opacity-90 bg-white border-none rounded-lg shadow m-5 flex flex-col items-center"
          >
            <h2 className="font-bold text-xl text-black mb-5">
              {new Date(order.date).toLocaleDateString()}
            </h2>
            <div className=" flex justify-center m-2">
              {order.products.map((product: IProduct) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center m-2"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl mb-2"
                  />
                  <p className="font-bold text-md text-black">
                    Precio: ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
