import { Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './Pages/home';
import NotFound from './components/notfound';
import ProductDetails from './Pages/products/products';
import Checkout from './Pages/checkout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/ShoppingCart" element={ <ShoppingCart /> } />
        <Route path="/product/:id" element={ <ProductDetails /> } />
        <Route path="/*" element={ <NotFound /> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Routes>
    </div>
  );
}

export default App;
