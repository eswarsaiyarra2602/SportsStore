import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Footer } from './components/Footer/Footer';
import { Product } from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { Orders } from './pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/badminton-products" element={<ShopCategory category="badminton" />} />
        <Route path="/football-products" element={<ShopCategory category="football" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":product_id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;