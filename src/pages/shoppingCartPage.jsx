import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  loadCart,
  removeFromCart,
  updateQuantity,
} from '../redux/cart/cartSlice';

export const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: uuidv4(),
      name,
      email,
      phone,
      address,
      items: cart,
    };
    console.log(order);

    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    localStorage.removeItem('cart');
    dispatch(clearCart());
  };

  const handleUpdateQuantity = (product, quantity) => {
    dispatch(updateQuantity({ ...product, quantity }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>ShoppingCart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <h2>{item.name}</h2>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleUpdateQuantity(item, Number(e.target.value))}
          />
          <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
        </div>
      ))}
    </>
  );
};
