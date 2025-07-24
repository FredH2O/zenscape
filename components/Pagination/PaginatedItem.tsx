"use client";
import { useState } from "react";
import product from "@/data/products";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const windowSize = 3;

const PaginatedItems = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  const handlePrevious = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + product.length) % product.length
    );
  };

  const visibleItems = Array.from({ length: windowSize }, (_, i) => {
    const index = (startIndex + i) % product.length;
    return product[index];
  });

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl text-slate-600 font-bold mb-6 text-center">
        🌿 Plant Collection
      </h1>

      <div className="relative flex justify-center items-center">
        <button
          onClick={handlePrevious}
          className="text-slate-600 cursor-pointer px-4 py-2 rounded-lg"
        >
          <FaArrowCircleLeft />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleItems.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-4 text-center"
            >
              <Image
                src={product.image}
                alt={product.alt}
                className="h-90 object-cover rounded-md mb-3"
                width={1000}
                height={1000}
              />
              <h2 className="font-semibold text-slate-600">{product.title}</h2>
              <p className="text-green-600 font-bold">€{product.price}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="text-slate-600 cursor-pointer px-4 py-2 rounded-lg"
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default PaginatedItems;
