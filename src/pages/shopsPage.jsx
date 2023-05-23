import { useState, useEffect } from 'react';

import axios from 'axios';

export const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  const addToCart = (shop, product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let foundProduct = cart.find((item) => item.id === product.id);

    if (foundProduct) {
      foundProduct.quantity++;
    } else {
      cart.push({ shop, ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  useEffect(() => {
    try {
      const fetchShops = async () => {
        const response = await axios.get('shops.json');
        setShops(response.data);
      };
      fetchShops();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <h1>Shops</h1>
      <div>
        <h5>Shops List</h5>
        {shops &&
          shops.map((shop) => (
            <div key={shop.id} onClick={() => setSelectedShop(shop)}>
              <h2>{shop.name}</h2>
            </div>
          ))}
      </div>
      <div>
        <h5>Products List</h5>
        {selectedShop && (
          <div>
            <h2>{selectedShop.name} Products</h2>
            {selectedShop.products.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.imageUrl} alt={product.name}></img>
                <p>{product.description}</p>
                <button onClick={() => addToCart(selectedShop.name, product)}>
                  add to HyperCart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
