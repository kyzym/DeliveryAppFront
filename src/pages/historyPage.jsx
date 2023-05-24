import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/cart/cartSlice';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

export const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchShops = async () => {
        const response = await axios.get('shops.json');
        setShops(response.data);
      };
      fetchShops();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1, m: 3 }}>
      <Typography variant="h4" mb={2}>
        Shops
      </Typography>
      <Grid container spacing={3}>
        {shops.map((shop) => (
          <Grid item key={shop.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {shop.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => setSelectedShop(shop)}>
                  View Products
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedShop && (
        <Box mt={4}>
          <Typography variant="h5" mb={2}>
            {selectedShop.name} Products
          </Typography>
          <Grid container spacing={3}>
            {selectedShop.products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <img src={product.imageUrl} alt={product.name} />
                    <Typography mt={1}>{product.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      aria-label="add to cart"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            shop: selectedShop.name,
                            ...product,
                            quantity: 1,
                          })
                        )
                      }>
                      <AddShoppingCart />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
