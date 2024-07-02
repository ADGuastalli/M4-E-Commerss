import React from "react";
import "flowbite";
import Image from "next/image";

//styles
import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Apple Zone</h1>
        <h2 className={styles.subtitle}>
          Encontra los mejores productoss de Apple
        </h2>
      </div>
      <div className="mt-20 mx-1">
        <div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src="/imagen1.webp"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src="/imagen3.webp"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src="/imagen2.webp"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src="/imagen4.webp"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src="/imagen5.webp"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
