/* eslint-disable react/prop-types */

import {
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';

import { StyledProductCard } from './ProductCardStyled';

export const ProductCard = ({
  product,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <StyledProductCard>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {product.name}
        </Typography>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            height: '100px',
            display: 'block',
            margin: '0 auto',
          }}
        />
        <Typography mt={2}>{product.description}</Typography>
        <Typography mt={1}>{product.price}</Typography>
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
