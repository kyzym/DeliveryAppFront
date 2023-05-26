import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../redux/cart/cartSlice';

import { Box, Typography } from '@mui/material';

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { useCartActions, useTotal } from '../hooks/useCartActions';
import { createOrder } from '../api/api';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';
import { selectCart } from '../redux/cart/cartSelectors';
import { CartOrderForm } from '../components/ShoppingCart/ShoppingCartForm';

export const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const { clearShoppingCart } = useCartActions();
  const total = useTotal();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const { reset } = useForm({ mode: 'onChange' });

  const onSubmit = async ({ name, email, phone, address }) => {
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
      createOrder(order);
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
        <CartOrderForm onSubmit={onSubmit} total={total} />
      </Box>

      <ShoppingCart cart={cart} />
    </Box>
  );
};
