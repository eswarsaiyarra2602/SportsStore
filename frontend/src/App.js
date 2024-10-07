import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Footer } from './components/Footer/Footer';
import {Product} from './pages/Product';
import ShopCategory from './pages/ShopCategory'
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/badminton-products' element={<ShopCategory category='badminton'/>}></Route>
            <Route path='/football-products' element={<ShopCategory category='football'/>}></Route>
            <Route path='/product' element={<Product/>}>
              <Route path=':product_id' element={<Product/>}/>
            </Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;