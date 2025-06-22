
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Productpage from './pages/Productpage'; 
import ScrollToTop from  './components/ScrollToTop'
import Categorypage from './pages/Categorypage';
import CartPage from './pages/Cartpage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/category" element={<Categorypage />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </Router>
  ); 
}

export default App;
