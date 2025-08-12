import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grevience" element={<Grievience />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="*" element={<Nopage />} /> {/* Always last */}
      </Routes>
    </div>
  );
}

export default App;
