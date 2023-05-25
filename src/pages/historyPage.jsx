import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Box, Typography, Button, Card } from '@mui/material';
import { toast } from 'react-toastify';
import { validationRules } from '../helpers/validation';
import { CircularProgress } from '@mui/material';
import { StyledImg } from '../components/ProductCard/ProductCardStyled';

export const HistoryPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });
  const [orders, setOrders] = useState([]);

  const onSubmit = async ({ email, phone }) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/orders/history',
        { email, phone }
      );
      setOrders(response.data);
      reset();
    } catch (error) {
      toast.error('No orders found for provided email and phone.');
      console.error(error.message);
    }
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h4" mb={2}>
        Order History
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: '30px' }}>
          Get Orders
        </Button>
      </form>

      {orders.map((order) => (
        <Card
          key={order.id}
          sx={{
            marginBottom: 2,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography variant="h6" mb={2}>
            Order Date: {new Date(order.date).toLocaleDateString()}
          </Typography>

          {order.items.map((item) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 1,
                gap: '10px',
              }}
              key={item.id}>
              {!imageLoaded && <CircularProgress />}
              <StyledImg
                src={item.imageUrl}
                alt={item.name}
                onLoad={() => setImageLoaded(true)}
                style={
                  imageLoaded
                    ? { width: 100, height: 100 }
                    : { display: 'none' }
                }
              />
              <Typography variant="body1" sx={{ flex: 1 }}>
                {item.name}
              </Typography>
              <Typography variant="body1">Quantity: {item.quantity}</Typography>
              <Typography variant="body1">Price: {item.price}</Typography>
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                Total: {item.quantity * item.price}
              </Typography>
            </Box>
          ))}

          <Typography variant="h6">
            Total Order Cost: {order.totalCost}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};
