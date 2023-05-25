import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, removeFromCart } from '../redux/cart/cartSlice';
import { selectShop } from '../redux/shop/shopSlice';
import { useEffect } from 'react';

export const useHandleCart = (selectedShop, dispatch) => {
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    if (cartItems.length > 0 && cartItems[0].shop !== selectedShop.name) {
      toast.warn('Complete the current order, please 😊 ');
      return;
    }
    dispatch(
      addToCart({
        shop: selectedShop.name,
        ...product,
        quantity: 1,
      })
    );
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return { handleAddToCart, handleRemoveFromCart };
};

export const useHandleShop = (dispatch) => {
  useEffect(() => {
    const loadedShop = localStorage.getItem('selectedShop');
    if (loadedShop) {
      dispatch(selectShop(JSON.parse(loadedShop)));
    }
  }, [dispatch]);

  const handleSelectShop = (shop) => {
    localStorage.setItem('selectedShop', JSON.stringify(shop));
    dispatch(selectShop(shop));
  };

  return { handleSelectShop };
};
