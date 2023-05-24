import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ShopsPage } from './pages/ShopsPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { Navbar } from './components/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
