import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../redux/cart/cartSlice';

import { Box, Typography } from '@mui/material';

import { toast } from 'react-toastify';

import { useCartActions, useTotal } from '../hooks/useCartActions';
import { createOrder } from '../api/api';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCartCard/ShoppingCartCard';
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

  const onSubmit = async ({ name, email, phone, address }, reset) => {
    const order = {
      name,
      email,
      phone,
      address,
      items: cart,
      totalCost: total,
    };

    try {
      await createOrder(order);
      toast.success('All right, please wait for your order! 😊');
      reset();
      clearShoppingCart();
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong... 😞\n${error.response.data.message}`);
    }
    console.log('Your order: ', order);
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
