import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart, removeFromCart } from '../redux/cart/cartSlice';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  margin: 16px;
`;

const ShopContainer = styled(Box)`
  flex-basis: 20%;
  margin-right: 16px;
`;

const ProductContainer = styled(Box)`
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShopCard = styled(Card)`
  margin-bottom: 16px;
  max-width: 250px;
`;

const ProductCard = styled(Card)`
  margin-bottom: 16px;
  max-width: 45%;
  height: 350px;
`;

export const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [addedProducts, setAddedProducts] = useState([]);
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

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        shop: selectedShop.name,
        ...product,
        quantity: 1,
      })
    );
    setAddedProducts([...addedProducts, product.id]);
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    setAddedProducts(addedProducts.filter((id) => id !== product.id));
  };

  return (
    <Container>
      <ShopContainer>
        <Typography variant="h4" mb={2} align="center">
          Shops
        </Typography>
        {shops.map((shop) => (
          <ShopCard key={shop.id}>
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
          </ShopCard>
        ))}
      </ShopContainer>

      {selectedShop && (
        <ProductContainer>
          <Typography variant="h4" mb={2} align="center" sx={{ width: '100%' }}>
            {selectedShop.name} Products
          </Typography>
          {selectedShop.products.map((product) => (
            <ProductCard key={product.id}>
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
                <Typography mt={1}>{product.description}</Typography>
              </CardContent>
              <CardActions>
                {!addedProducts.includes(product.id) ? (
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
            </ProductCard>
          ))}
        </ProductContainer>
      )}
    </Container>
  );
};
