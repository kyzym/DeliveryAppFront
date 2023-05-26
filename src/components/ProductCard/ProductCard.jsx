import { CardActions, IconButton, Typography } from '@mui/material';
import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';
import {
  StyledCardContent,
  StyledCircularProgress,
  StyledImg,
  StyledProductCard,
} from './ProductCardStyled';
import { useState } from 'react';
import { Box } from '@mui/material';

export const ProductCard = ({
  product,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledProductCard>
      <StyledCardContent>
        <Typography variant="h5" gutterBottom>
          {product.name}
        </Typography>
        <Box
          sx={{
            height: 200,
            position: 'relative',
          }}>
          {!imageLoaded && <StyledCircularProgress />}
          <StyledImg
            src={product.imageUrl}
            alt={product.name}
            onLoad={() => setImageLoaded(true)}
            style={imageLoaded ? {} : { display: 'none' }}
            sx={{ height: '100%', width: '100%' }}
          />
        </Box>
        <Typography mt={2}>{product.description}</Typography>
        <Typography mt={1}>Price: {product.price}</Typography>
      </StyledCardContent>
      <CardActions>
        {!cartItems.some((item) => item.id === product.id) ? (
          <IconButton
            color="primary"
            aria-label="add to cart"
            onClick={() => handleAddToCart(product)}>
            <AddShoppingCart />
          </IconButton>
        ) : (
          <IconButton
            aria-label="remove from cart"
            onClick={() => handleRemoveFromCart(product)}>
            <RemoveShoppingCart />
          </IconButton>
        )}
      </CardActions>
    </StyledProductCard>
  );
};
