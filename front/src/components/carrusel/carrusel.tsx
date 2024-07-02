import React from "react";
import "flowbite";
import "flowbite-react";
import Image from "next/image";
import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="opacity-90">
        <Image src="/imagen1.webp" alt="..." width={500} height={500} />
        <Image src="/imagen2.webp" alt="..." width={500} height={500} />
        <Image src="/imagen3.webp" alt="..." width={500} height={500} />
        <Image src="/imagen4.webp" alt="..." width={500} height={500} />
        <Image src="/imagen5.webp" alt="..." width={500} height={500} />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
