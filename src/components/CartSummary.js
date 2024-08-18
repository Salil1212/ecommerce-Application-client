// components/CartSummary.js
import React from "react";

export default function CartSummary({ subtotal, discount = 0 }) {
  const total = subtotal - discount;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Cart Summary</h2>
      <p className="mt-2 text-gray-500">Subtotal: ${subtotal.toFixed(2)}</p>
      {discount > 0 && (
        <p className="text-green-500">Discount: -${discount.toFixed(2)}</p>
      )}
      <p className="mt-4 text-lg font-bold">Total: ${total.toFixed(2)}</p>
      <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">
        Checkout
      </button>
    </div>
  );
}
