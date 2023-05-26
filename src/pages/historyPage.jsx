import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import { Box, Typography } from '@mui/material';

import { fetchOrderHistory } from '../api/api';
import { OrderForm } from '../components/History/HistoryOrderForm';
import { OrderCard } from '../components/History/HistoryOrderCard/HistoryOrderCard';

export const HistoryPage = () => {
  const { reset } = useForm({ mode: 'onChange' });
  const [orders, setOrders] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const onSubmit = async ({ email, phone }) => {
    try {
      const orders = await fetchOrderHistory(email, phone);
      setOrders(orders);
      reset();
    } catch (error) {
      toast.error('No orders found for provided email and phone.');
      console.error(error.message);
    }
  };

  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h4" mb={2}>
        Order History
      </Typography>
      <OrderForm onSubmit={onSubmit} />
      {orders.map((order) => (
        <OrderCard
          order={order}
          imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}
          key={order.id}
        />
      ))}
    </Box>
  );
};
