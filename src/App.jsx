import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ShopsPage } from './pages/ShopsPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { Navbar } from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HistoryPage } from './pages/HistoryPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
};

/**
 * TODO:
 * spinner
 * different images
 * card styles
 */
