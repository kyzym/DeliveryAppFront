import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  loadCart,
  removeFromCart,
  updateQuantity,
} from '../redux/cart/cartSlice';

import {
  TextField,
  IconButton,
  Button,
  Card,
  Box,
  Typography,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import axios from 'axios';

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

    axios
      .post('http://localhost:3001/api/orders', order)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

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
    <Box sx={{ m: 3, display: 'flex' }}>
      <Box sx={{ flexBasis: '30%', marginRight: 2 }}>
        <Typography variant="h4" mb={2}>
          Your contacts
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>

      <Box sx={{ flexBasis: '70%' }}>
        <Typography variant="h4" mb={2}>
          Shopping Cart
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {cart.map((item) => (
            <Card
              sx={{
                width: '45%',
                marginBottom: 2,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <Typography variant="h6">{item.name}</Typography>
              <Typography>${item.price}</Typography>
              <Box>
                <IconButton
                  onClick={() => handleUpdateQuantity(item, item.quantity - 1)}>
                  <Remove />
                </IconButton>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item, Number(e.target.value))
                  }
                />
                <IconButton
                  onClick={() => handleUpdateQuantity(item, item.quantity + 1)}>
                  <Add />
                </IconButton>
              </Box>
              <IconButton onClick={() => handleRemoveFromCart(item)}>
                <Delete color="error" />
              </IconButton>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
