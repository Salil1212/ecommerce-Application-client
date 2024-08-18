// components/CartItem.js
import React from "react";

export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <img src={item.image} alt={item.name} className="object-cover w-20 h-20" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-bold">{item.name}</h3>
         <p>${item.price.toFixed(2)}</p>
      </div> 
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-3 py-1 text-gray-700 bg-gray-300 rounded-l"
        >
          -
        </button>
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="w-12 text-center border border-gray-300"
        />
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-3 py-1 text-gray-700 bg-gray-300 rounded-r"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="px-3 py-1 ml-4 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Remove
      </button> 
     
    </div>
  );
}
