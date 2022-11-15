import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PImage from './pages/pImage';
import Adress from './pages/Adress';
import Fname from './pages/Fname';

import { useDispatch } from 'react-redux';


function App() {

  

  return (
    <div>
      <BrowserRouter >
      
      <div className='nav-bar'>
        <Link to='/Fname' className='nav-item'>Full-Name</Link>
        <Link to='/Adress' className='nav-item'>Adress</Link>
        <Link to='/PImage' className='nav-item'>Profile-Photo</Link>
        
        
        </div>
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Fname' element={<Fname />} />
            <Route path='/Adress' element={<Adress />} />
            <Route path='/PImage' element={<PImage />} />
          </Routes>
          </div>
      </BrowserRouter>
      
      </div>
        
      
    
  )
}

export default App;