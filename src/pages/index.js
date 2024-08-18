// pages/index.js
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "./cart";
import "../app/globals.css"
export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([
    {
      "id": 3,
      "name": "Product 3",
      "image":"https://cdn.pixabay.com/photo/2017/04/19/13/58/notebook-2242372_1280.jpg",
      "price": 19.99,
      "description": "Description of Product 3",
      "quantity":1
    }
  ]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      console.log(products)

  }, []);
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
       
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
           
        );

      } else {
        return [...prevCart, { ...product, quantity: 1 }];
        console.log(cart)
      }
    });
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Product Listing</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div> 
      <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem}/>
    </div>
  );
}
