import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { ShopsPage } from './pages/shopsPage.jsx';
import { ShoppingCartPage } from './pages/shoppingCartPage.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HistoryPage } from './pages/historyPage.jsx';

export const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </HashRouter>
  );
};
