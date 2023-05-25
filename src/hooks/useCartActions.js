import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  loadCart,
  removeFromCart,
  updateQuantity,
} from '../redux/cart/cartSlice';
import { useEffect } from 'react';
import { selectCart } from '../redux/cart/cartSelectors';

export const useCartActions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const handleUpdateQuantity = (product, quantity) => {
    if (quantity >= 0) {
      dispatch(updateQuantity({ ...product, quantity }));
    }
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const clearShoppingCart = () => {
    localStorage.removeItem('cart');
    dispatch(clearCart());
  };

  return { handleUpdateQuantity, handleRemoveFromCart, clearShoppingCart };
};

export const useTotal = () => {
  const cart = useSelector(selectCart);

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return total;
};
