import { Typography, CircularProgress } from '@mui/material';
import { StyledImg } from '../../ProductCard/ProductCardStyled';
import {
  StyledHistoryCard,
  StyledHistoryCardContent,
} from './HistoryOrderCardStyled';

export const OrderCard = ({ order, imageLoaded, setImageLoaded }) => {
  return (
    <StyledHistoryCard key={order.id}>
      <Typography variant="h6" mb={2}>
        Order Date: {new Date(order.date).toLocaleString()}
      </Typography>

      {order.items.map((item) => (
        <StyledHistoryCardContent key={item.id}>
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
        </StyledHistoryCardContent>
      ))}

      <Typography variant="h6">Total Order Cost: {order.totalCost}</Typography>
    </StyledHistoryCard>
  );
};
