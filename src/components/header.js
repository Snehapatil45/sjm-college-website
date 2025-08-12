import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ position: 'absolute', backgroundColor: 'white', paddingRight: '10px' }} id="navbar">
      <img src="imagesofsjm/image 3782.svg" alt="logo" id="logoimg" />
      <h1 id="logotxt1">
        SJM <br />
        <span id="logotxt2">Polytechnic</span>
      </h1>
      <ul id="nav1">
        <li className="nav2"><Link to="/">Home</Link></li>
        <li className="nav2"><Link to="/about">About us</Link></li>
        <li className="nav2"><Link to="/contact">Contact</Link></li>
        <li className="nav2"><Link to="/alumini">Alumini</Link></li>
        <li id="more1" className="nav2">
          <button>More</button>
          <div id="more2" style={{ zIndex: 5 }}>
            <Link to="/NSS">NSS</Link>
            <Link to="/admission">Admission</Link>
            <Link to="/grevience">Grievience</Link>
            <Link to="/affliction">Affliction</Link>
            <Link to="/mandatory-disclosure">Mandatory disclosure</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
