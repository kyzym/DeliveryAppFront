/* eslint-disable react/prop-types */
import { IconButton, Card, Box, Typography, TextField } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useCartActions } from '../../hooks/useCartActions';

export const ShoppingCart = ({ cart }) => {
  const { handleUpdateQuantity, handleRemoveFromCart } = useCartActions();
  return (
    <Box sx={{ flexBasis: '70%' }}>
      <Typography variant="h4" mb={2}>
        Shopping Cart
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Card
              sx={{
                width: '45%',
                marginBottom: 2,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: 200, height: 200 }}
              />
              <Typography variant="h6">{item.name}</Typography>
              <Typography>${item.price * item.quantity}</Typography>
              <Box
                sx={{
                  display: 'flex',
                }}>
                <IconButton
                  onClick={() => handleUpdateQuantity(item, item.quantity - 1)}>
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
                  onClick={() => handleUpdateQuantity(item, item.quantity + 1)}>
                  <Add />
                </IconButton>
              </Box>
              <IconButton onClick={() => handleRemoveFromCart(item)}>
                <Delete color="error" />
              </IconButton>
            </Card>
          ))
        ) : (
          <Typography variant="h5">
            🛒 Your cart seems to be empty... How about adding some cool stuff?
            😊
          </Typography>
        )}
      </Box>
    </Box>
  );
};
