import React from "react";
import "flowbite";
import "flowbite-react";

function LineTime() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            Enero 2019
          </time>
          <h3 className="text-2xl font-semibold text-white">
            Lanzamiento Oficial:
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
            En enero de 2019, APPLE ZONE realizó su lanzamiento oficial en
            Argentina. La plataforma se presentó como la solución definitiva
            para los amantes de Apple que buscaban acceder a los últimos
            productos de la marca.
          </p>
          <a
            href="https://www.apple.com/la/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "
          >
            Leer más sobre Apple{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Agosto 2020
          </time>
          <h3 className="text-2xl font-semibold text-white">
            Primer iPhone con 5G:
          </h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            En agosto de 2020, APPLE ZONE fue testigo del lanzamiento del primer
            iPhone compatible con redes 5G. La demanda fue abrumadora, y los
            argentinos acudieron en masa a la plataforma para adquirir el nuevo
            dispositivo.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Marzo 2022
          </time>
          <h3 className="text-2xl font-semibold text-white">
            Expansión Regional:
          </h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            En marzo de 2022, APPLE ZONE dio un paso importante al expandirse
            más allá de Argentina. La plataforma comenzó a atender a clientes en
            países vecinos, consolidando su posición como líder en la región.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Noviembre 2023
          </time>
          <h3 className="text-2xl font-semibold text-white">Apple Silicon:</h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            En noviembre de 2023, APPLE ZONE fue parte del emocionante
            lanzamiento de las primeras Mac con procesadores Apple Silicon. Los
            usuarios argentinos pudieron experimentar un rendimiento
            revolucionario en sus computadoras.
          </p>
        </li>
        <li className="ms-4 mb-11">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Mayo 2024
          </time>
          <h3 className="text-2xl font-semibold text-white">Apple Glasses:</h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            En mayo de 2024, APPLE ZONE sorprendió al público al ofrecer en
            preventa las Apple Glasses, los anteojos inteligentes de la marca.
            La expectación fue enorme, y los argentinos se sumaron a la nueva
            era de la tecnología portátil.
          </p>
        </li>
        <li className="ms-4 mb-11">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Continuara...
          </time>
          <h3 className="text-2xl font-semibold text-white">
            Futuro Prometedor:
          </h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            APPLE ZONE está comprometida con su visión de acercar la tecnología
            de Apple a todos los argentinos. A medida que la marca sigue
            innovando y lanzando nuevos productos, APPLE ZONE se mantendrá a la
            vanguardia para ofrecer lo último en dispositivos, accesorios y
            servicios. El compromiso con la calidad, la atención al cliente y la
            expansión regional seguirán siendo los pilares del crecimiento
            continuo de APPLE ZONE en los próximos años.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default LineTime;
