import React, { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  let data = [
    {
      id: 1,
      sale: false,
      title: "Fancy Product",
      discount: "",
      price: "$40.00 - $80.00",
      cart: false,
    },
    {
      id: 2,
      sale: true,
      title: "Special Item",
      discount: "$20.00",
      price: "$18.00",
      cart: true,
    },
    {
      id: 3,
      sale: true,
      title: "Sale Item",
      discount: "$50.00",
      price: "$25.00",
      cart: true,
    },
    {
      id: 4,
      sale: false,
      title: "Popular Item",
      discount: "",
      price: "$40.00",
      cart: true,
    },
    {
      id: 5,
      sale: true,
      title: "Sale Item",
      discount: "$50.00",
      price: "$25.00",
      cart: true,
    },
    {
      id: 6,
      sale: false,
      title: "Fancy Product",
      discount: "",
      price: "$120.00 - $280.00",
      cart: false,
    },
    {
      id: 7,
      sale: true,
      title: "Special Item",
      discount: "$20.00",
      price: "$18.00",
      cart: true,
    },
    {
      id: 8,
      sale: false,
      title: "Popular Item",
      price: "$40.00",
      cart: true,
    },
  ];
  

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartCount(cartCount - 1);
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  return (
    <div>
      
      {data.map((product) => (
        <button onClick={() => isInCart(product) ? removeFromCart(product) : addToCart(product)}>
          {isInCart(product) ? 'Remove' : 'Add to Cart'} 
        </button>
      ))}
      <button>Cart ({cartCount})</button>
    </div>
  );
}

export default App;
