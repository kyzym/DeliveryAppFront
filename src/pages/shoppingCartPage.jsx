import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ShoppingCartPage = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const loadedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(loadedCart);
  }, []);

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
    setCart([]);
  };

  const updateQuantity = (product, quantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const foundProduct = updatedCart.find((item) => item.id === product.id);

      if (foundProduct) {
        foundProduct.quantity = quantity;
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
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
            onChange={(e) => updateQuantity(item, Number(e.target.value))}
          />
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </>
  );
};
