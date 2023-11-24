import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

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
