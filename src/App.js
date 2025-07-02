import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import SearchPage from './pages/SearchPage';
import Products from './pages/Products';
import './App.css';


function App() {
  return (
    <div className='bg-gray-50'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        {/* sending id to the UserProfile component */}
        <Route path='/user/:id' element ={<UserProfile />}/> 
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
