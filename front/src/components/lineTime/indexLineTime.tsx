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
            January 2019
          </time>
          <h3 className="text-2xl font-semibold text-white">
            Official Launch:
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
            In January 2019, APPLE ZONE launched officially in the USA. The
            platform was introduced as the ultimate solution for Apple
            enthusiasts looking to access the latest products from the brand.
          </p>
          <a
            href="https://www.apple.com/la/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "
          >
            Read more about Apple
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
            August 2020
          </time>
          <h3 className="text-2xl font-semibold text-white">
            First iPhone with 5G:
          </h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            In August 2020, APPLE ZONE witnessed the launch of the first iPhone
            compatible with 5G networks. The demand was overwhelming, and
            Americans flocked to the platform to purchase the new device.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </time>
          <h3 className="text-2xl font-semibold text-white">
            Regional Expansion:
          </h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            In March 2022, APPLE ZONE took a significant step by expanding
            beyond the USA. The platform began serving customers in neighboring
            countries, solidifying its position as a leader in the region.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2023
          </time>
          <h3 className="text-2xl font-semibold text-white">Apple Silicon:</h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            In November 2023, APPLE ZONE was part of the exciting launch of the
            first Macs with Apple Silicon processors. U.S. users were able to
            experience revolutionary performance on their computers.
          </p>
        </li>
        <li className="ms-4 mb-11">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2024
          </time>
          <h3 className="text-2xl font-semibold text-white">Apple Glasses:</h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            In May 2024, APPLE ZONE surprised the public by offering pre-orders
            for Apple Glasses, the brand s smart glasses. There was enormous
            anticipation, and Americans embraced the new era of wearable
            technology.
          </p>
        </li>
        <li className="ms-4 mb-11">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            To be continued...
          </time>
          <h3 className="text-2xl font-semibold text-white">
            Promising Future:
          </h3>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
            APPLE ZONE is committed to its vision of bringing Apple technology
            to all Americans. As the brand continues to innovate and launch new
            products, APPLE ZONE will stay at the forefront to offer the latest
            in devices, accessories, and services. Commitment to quality,
            customer care, and regional expansion will remain the pillars of
            APPLE ZONEs ongoing growth in the years to come.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default LineTime;
