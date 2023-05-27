import {
  IconButton,
  Box,
  Typography,
  TextField,
  CircularProgress,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useCartActions } from '../../../hooks/useCartActions';
import { StyledImg } from '../../ProductCard/ProductCardStyled';
import { useState } from 'react';
import {
  StyledCard,
  StyledCardContainer,
  StyledImageContainer,
} from './ShoppingCartCardStyled';

export const ShoppingCart = ({ cart }) => {
  const { handleUpdateQuantity, handleRemoveFromCart } = useCartActions();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box sx={{ flexBasis: '70%' }}>
      <Typography variant="h4" mb={2}>
        Shopping Cart
      </Typography>
      <StyledCardContainer>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <StyledCard key={item.id}>
                <StyledImageContainer>
                  {!imageLoaded && <CircularProgress />}
                  <StyledImg
                    src={item.imageUrl}
                    alt={item.name}
                    onLoad={() => setImageLoaded(true)}
                    style={imageLoaded ? {} : { display: 'none' }}
                  />
                </StyledImageContainer>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
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
              </StyledCard>
            );
          })
        ) : (
          <Typography variant="h5">
            🛒 Your cart seems to be empty... How about adding some cool stuff?
            😊
          </Typography>
        )}
      </StyledCardContainer>
    </Box>
  );
};
