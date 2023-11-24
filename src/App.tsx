import { Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './Pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/ShoppingCart" element={ <ShoppingCart /> } />
      </Routes>
    </div>
  );
}

export default App;
