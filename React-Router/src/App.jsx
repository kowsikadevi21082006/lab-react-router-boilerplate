import { useState } from 'react'
import { Route, Routes,NavLink} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Pagenotfound from './components/Pagenotfound';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems:"center", backgroundColor: "black",height:"60px" }}>
        <div>
         <h3><NavLink to="/" className="active-link">Kalvium ❤️</NavLink></h3>
        </div>

        <div style={{ display: "flex", width: "150px", justifyContent: "space-evenly" }}>
          <p><NavLink to="/about" className="active-link">About</NavLink></p>
          <p><NavLink to="/contact" className="active-link">Contact</NavLink></p>
        </div>
      </nav>
       

     <div style={{textAlign:"center"}}>      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" component={<Pagenotfound/>} />
      </Routes>
      </div>

      </div>

    );
  
}

export default App