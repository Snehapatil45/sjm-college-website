import Header from "../components/header";
import Footer from "../components/footer";
import React, { useState } from 'react';
import CountrySelect from '../components/country.js';
import StateSelect from '../components/state.js';
import CitySelect from '../components/city.js';
export default function Admission() {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const handleValidation = () =>{
  const label = document.getElementById("label"); 
  const field = document.getElementById("field"); 
  const msg = document.getElementById("errormsg"); 
  label.style.bottom = "45px"; 
  if (!field.value.match(/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) { 
    msg.textContent = "Please enter valid email"; 
    msg.style.backgroundColor = "red"; 
  } 
  else { 
    msg.textContent = "Accepted "; 
    msg.style.backgroundColor = "green";
   }
}

return (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="SJM.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css" />
      {<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>}

      <title>Document</title>
    </head>
    <body>
      <Header />
      <img style={{ width: '1510px' }} src="imagesofsjm\Banner.svg" alt="book" />
      <h6 id="achad1">Admission</h6>
      <h1 id="head">Meet our Admissions Counselors</h1>
      <p id="para" style={{ padding: '10px 200px' }}>
        We are looking htmlForward to meeting you! Our admissions counselors are here
        to answer your questions and guide you through each step of the admissions
        process. You also can reach the Admissions Office by
        calling 414-382-6100or emailing admissions@ace.edu.
      </p>
      <div id="director">
        <div className="dirct1">
          <img style={{ float: 'right' }} src="imagesofsjm\Group 1000004310.svg" alt="men" />
          <h1>Viraj D</h1>
          <h4 style={{ padding: '10px 0px' }}>Director of Admission</h4>
          <p>virajd@aceclg.edu</p>
          <p style={{ padding: '10px 0px' }}>9008523186</p>
        </div>
        <div className="dirct1">
          <img style={{ float: 'right' }} src="imagesofsjm\Group 1000004312.svg" alt="men" />
          <h1>Meena</h1>
          <h4 style={{ padding: '10px 0px' }}>Director of Placements</h4>
          <p>meena@aceclg.edu</p>
          <p style={{ padding: '10px 0px' }}>9008523166</p>
        </div>
        <div className="dirct1">
          <img style={{ float: 'right' }} src="imagesofsjm\Group 1000004312.svg" alt="men" />
          <h1>Reenu</h1>
          <h4 style={{ padding: '10px 0px' }}>Director of Faculty</h4>
          <p>reenu@aceclg.edu</p>
          <p style={{ padding: '10px 0px' }}>9008523188</p>
        </div>
      </div>
      <div id="form1">
        <h1 style={{ padding: '10px 25px' }}>Admission htmlForm</h1><hr />
        
        <form action="" method="post" id="form2">
          <div className="form3" style={{ display: 'flex' }}>
            <li><label style={{ display: 'block' }} htmlFor="firstname">First name</label>
              <input type="text" name="firstname" required /></li>
            <li>
              <label style={{ display: 'block' }} htmlFor="lastname">Last name</label>
              <input type="text" name="lastname" required /></li>
          </div>
          <div className="form3">
            <label style={{ display: 'block' }} htmlFor="dateofbirth">DOB</label>
            <input type="date" name="dateofbirth" required />
          </div>
          <div className="form3" style={{ display: 'flex' }}>
            <li>
              <label id="label" style={{ display: 'block' }} htmlFor="email">Email</label>
              <input id="field" type="email" name="email" onInput={handleValidation} /><p style={{ width: '300px',marginLeft:'50px' }}  id="errormsg"></p></li>
            <li>
              <label style={{ display: 'block' }} htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" name="phone" />
            </li>
          </div><br /><br />
          <div className="select_option" style={{ width: '300px' }}><div style={{ display: 'flex' }} >
            < CountrySelect onCountryChange={setCountry} style={{ width: '300px' }} />
            {country && <StateSelect countryCode={country} onStateChange={setState} style={{ width: '300px' }} />}</div></div>   <br />   <br />
          {state && <CitySelect countryCode={country} stateCode={state} onCityChange={setCity} style={{ width: '300px' }} />}
          <script>  <p>City: {city}</p></script>

          <div className="form3" style={{ display: 'flex' }}>
            <li>
              <label style={{ display: 'block' }} htmlFor="addr">Address</label>
              <input style={{ height: '50px', width: '500px' }} type="text" name="addr" required />
            </li>
            <li>
              <label style={{ display: 'block' }} htmlFor="pin">Pincode</label>
              <input type="text" name="pin" pattern="[0-9]{4}" maxLength="6" />
            </li>
          </div>
        </form>
      </div>
      <div id="footer-container"></div>

      {
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      }
      <Footer />
    </body>
  </html>
);
}