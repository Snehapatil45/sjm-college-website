import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Grievience from './pages/grevience';
import Admission from './pages/admission';
import Nopage from './pages/nopage';
import Alumini from './pages/alumini';
import "./pages/SJM.css";

function App() {
  return (
    <div>
      <BrowserRouter future={{ v7_startTransition: true,v7_relativeSplatPath: true }}>
           <Routes>
           <Route path="*" element={<Nopage/>}/>
              <Route index element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/grevience" element={<Grievience/>}/>
              <Route path="/admission" element={<Admission/>}/>
              <Route path="/alumini" element={<Alumini/>}/>
           </Routes>
      </BrowserRouter>
    </div>
    
  )
}
export default App;
