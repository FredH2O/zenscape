"use client";
import { useState } from "react";
import product from "@/data/products";
import Image from "next/image";

const windowSize = 3;

const PaginatedItems = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1) % product.length);
  };

  const visibleItems = Array.from({ length: windowSize }, (_, i) => {
    const index = (startIndex + i) % product.length;
    return product[index];
  });

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        🌿 Plant Collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleItems.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 text-center"
          >
            <Image
              src={product.image}
              alt={product.alt}
              className="w-full h-40 object-cover rounded-md mb-3"
              width={1000}
              height={1000}
            />
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-green-600 font-bold">€{product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default PaginatedItems;
