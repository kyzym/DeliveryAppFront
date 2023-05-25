import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../redux/cart/cartSlice';

import {
  TextField,
  IconButton,
  Button,
  Card,
  Box,
  Typography,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { validationRules } from '../helpers/validation';
import { useCartActions, useTotal } from '../hooks/useCartActions';
import { createOrder } from '../api/api';

export const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { handleUpdateQuantity, handleRemoveFromCart, clearShoppingCart } =
    useCartActions();
  const total = useTotal();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = async ({ name, email, phone, address }) => {
    if (cart.length === 0) {
      toast.error('Your cart is empty. Please add some items.');
      return;
    }

    const order = {
      id: uuidv4(),
      name,
      email,
      phone,
      address,
      items: cart,
      totalCost: total,
    };

    try {
      const response = createOrder(order);
      console.log(response.data);
      toast.success('All right, please wait for your order! 😊');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong... 😞');
    }
    console.log('Your order: ', order);
    clearShoppingCart();
  };

  return (
    <Box sx={{ m: 3, display: 'flex' }}>
      <Box sx={{ flexBasis: '30%', marginRight: 2 }}>
        <Typography variant="h4" mb={2}>
          Your contacts
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('name', validationRules.name)}
            fullWidth
            margin="normal"
            label={!errors.name ? 'Name' : 'Error'}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : ''}
          />
          <TextField
            {...register('email', validationRules.email)}
            fullWidth
            margin="normal"
            type="email"
            label={!errors.email ? 'Email' : 'Error'}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            {...register('phone', validationRules.phone)}
            fullWidth
            margin="normal"
            type="tel"
            label={!errors.phone ? 'Phone number' : 'Error'}
            error={errors.phone ? true : false}
            helperText={errors.phone ? errors.phone.message : ''}
          />
          <TextField
            {...register('address', validationRules.address)}
            fullWidth
            margin="normal"
            label={!errors.address ? 'Address' : 'Error'}
            error={errors.address ? true : false}
            helperText={errors.address ? errors.address.message : ''}
          />
          <Typography variant="h5" mt={2} mb={2}>
            Shopping Cart Total: ${total}
          </Typography>
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
          {cart.length > 0 ? (
            cart.map((item) => (
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
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: 200, height: 200 }}
                />
                <Typography variant="h6">{item.name}</Typography>
                <Typography>${item.price * item.quantity}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                  }}>
                  <IconButton
                    onClick={() =>
                      handleUpdateQuantity(item, item.quantity - 1)
                    }>
                    <Remove />
                  </IconButton>
                  <TextField
                    style={{ textAlign: 'center', appearance: 'textfield' }}
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item, Number(e.target.value))
                    }
                  />
                  <IconButton
                    onClick={() =>
                      handleUpdateQuantity(item, item.quantity + 1)
                    }>
                    <Add />
                  </IconButton>
                </Box>
                <IconButton onClick={() => handleRemoveFromCart(item)}>
                  <Delete color="error" />
                </IconButton>
              </Card>
            ))
          ) : (
            <Typography variant="h5">
              🛒 Your cart seems to be empty... How about adding some cool
              stuff? 😊
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
