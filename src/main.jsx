import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ShopsPage } from './pages/ShopsPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { Navbar } from './components/Navbar';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<ShopsPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);
