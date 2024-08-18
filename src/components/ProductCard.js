// components/ProductCard.js
import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="object-cover w-full h-48" />
     <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
     <button
        onClick={() => addToCart(product)}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
     
    </div>
  );
}
