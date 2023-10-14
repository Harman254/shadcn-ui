import React from "react";
import { FC } from "react";

interface PricingOptionProps {
  option: {
    title: string;
    description: string;
    price: string;
    priceDescription: string;
    features: string[];
  }
}

const PricingOptions: FC<PricingOptionProps> = ({
  option
}) => {

  const {title, description, price, priceDescription, features} =  option
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center dark:text-white text-gray-900  rounded-lg border border-gray-100 shadow">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">
          {priceDescription}
        </span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="text-white text-center bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg py-3 items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingOptions;
