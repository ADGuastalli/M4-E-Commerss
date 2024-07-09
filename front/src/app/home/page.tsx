import React from "react";
import Cards from "../../components/cards/indexCard";
import ContactMail from "../../components/contact/indexMail";
import ContacAddress from "@/components/contact/indexAddress";
import CarouselComponent from "@/components/carrusel/carrusel";
import HomePageComoComprar from "@/components/comoComprar/page";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-8xl font-bold m-5 sm:m-10 shadow-xl">
          Apple Zone
        </h1>
      </div>
      <div>
        <CarouselComponent />
      </div>
      <div>
        <div>
          <h2 className="text-xl sm:text-3xl font-bold ml-5 mt-10">
            Our Products
          </h2>
        </div>

        <div>
          <Cards />
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-xl sm:text-3xl font-bold ml-5 mt-9">
            How to Buy
          </h2>
        </div>
        <div>
          <HomePageComoComprar />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center  sm:mt-10">
        <div className="border-r-2 pr-5 w-full sm:w-96">
          <ContactMail />
        </div>
        <div className="pl-5 w-full sm:w-96">
          <ContacAddress />
        </div>
      </div>
    </div>
  );
}
