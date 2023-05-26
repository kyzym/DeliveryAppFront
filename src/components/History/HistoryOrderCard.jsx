// OrderCard.js
import { Card, Typography, Box, CircularProgress } from '@mui/material';
import { StyledImg } from '../ProductCard/ProductCardStyled';

export const OrderCard = ({ order, imageLoaded, setImageLoaded }) => {
  return (
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
        Order Date: {new Date(order.date).toLocaleString()}
      </Typography>

      {order.items.map((item) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 1,
            gap: 2,
            width: '60%',
          }}
          key={item.id}>
          {!imageLoaded && <CircularProgress />}
          <StyledImg
            src={item.imageUrl}
            alt={item.name}
            onLoad={() => setImageLoaded(true)}
            style={
              imageLoaded ? { width: 100, height: 100 } : { display: 'none' }
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

      <Typography variant="h6">Total Order Cost: {order.totalCost}</Typography>
    </Card>
  );
};
