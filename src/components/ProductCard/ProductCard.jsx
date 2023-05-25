/* eslint-disable react/prop-types */

import {
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';

import { StyledImg, StyledProductCard } from './ProductCardStyled';

import { useState } from 'react';
import { CircularProgress } from '@mui/material';

export const ProductCard = ({
  product,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledProductCard>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {product.name}
        </Typography>
        {!imageLoaded && <CircularProgress />}
        <StyledImg
          src={product.imageUrl}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? {} : { display: 'none' }}
        />
        <Typography mt={2}>{product.description}</Typography>
        <Typography mt={1}>Price: {product.price}</Typography>
      </CardContent>
      <CardActions>
        {!cartItems.some((item) => item.id === product.id) ? (
          <IconButton
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
