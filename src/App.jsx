import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ShopsPage } from './pages/ShopsPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer autoClose={2500} />
    </BrowserRouter>
  );
};

/**
 * TODO:
 * redux selectors
 * code modules
 * spinner
 * different images
 */
