import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './container/Home';
import Login from './container/Login';
import { Navbar } from './components';
import Children from './container/Children';
import Women from './container/Women';
import Men from './container/Men';
import Checkout from './container/Checkout';

function App() {
  
  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/children' element={<Children />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
