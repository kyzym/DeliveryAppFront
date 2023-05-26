import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectShop } from '../redux/shop/shopSlice';
import { Typography } from '@mui/material';

import { fetchShops } from '../api/api';
import { ShopCard } from '../components/ShopCard/ShopCard';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { useHandleCart, useHandleShop } from '../hooks/hooks';
import {
  Container,
  ProductContainer,
  ShopContainer,
} from './styles/ShopsPageStyled';
import { selectSelectedShop } from '../redux/shop/shopSelectors';
import { selectCart } from '../redux/cart/cartSelectors';

export const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const selectedShop = useSelector(selectSelectedShop);
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadedShop = localStorage.getItem('selectedShop');
    if (loadedShop) {
      dispatch(selectShop(JSON.parse(loadedShop)));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchShops()
      .then((data) => setShops(data))
      .catch((error) => console.log(error));
  }, []);

  const { handleAddToCart, handleRemoveFromCart } = useHandleCart(
    selectedShop,
    dispatch
  );
  const { handleSelectShop } = useHandleShop(dispatch);

  return (
    <Container>
      <ShopContainer>
        <Typography variant="h4" mb={2} align="center">
          Shops
        </Typography>
        {shops &&
          shops.map((shop) => (
            <ShopCard
              shop={shop}
              selectedShop={selectedShop}
              handleSelectShop={handleSelectShop}
              key={shop.id}
            />
          ))}
      </ShopContainer>

      {selectedShop ? (
        <ProductContainer>
          <Typography variant="h4" mb={2} align="center" sx={{ width: '100%' }}>
            {selectedShop.name} Products
          </Typography>
          {selectedShop.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </ProductContainer>
      ) : (
        <ProductContainer>
          <Typography
            variant="h5"
            mb={2}
            align="center"
            sx={{ width: '80%', marginTop: '7%' }}>
            {
              "Welcome! Hungry? 😋 Pick a restaurant on the left and let's get that tummy happy!🍔"
            }
          </Typography>
        </ProductContainer>
      )}
    </Container>
  );
};
