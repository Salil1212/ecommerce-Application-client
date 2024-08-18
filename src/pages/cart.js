// pages/cart.js
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function Cart({cart=[
  // {
  //   "id": 3,
  //   "name": "Product 3",
  //   "image":"https://cdn.pixabay.com/photo/2017/04/19/13/58/notebook-2242372_1280.jpg",
  //   "price": 19.99,
  //   "description": "Description of Product 3",
  //   "quantity":1
  // }
],updateQuantity,removeItem}) {


  const subtotal = cart.length>0?cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ):0;

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-2">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
             
            ))
         
          )}
        </div>
        <CartSummary subtotal={subtotal} discount={0} />
      </div>
    </div>
  );
}
