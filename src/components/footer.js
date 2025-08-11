export default function Footer(){
    return(
        <footer>
      <div id="abt">
        <div id="abt1">
          <li className="abt4"><img src="imagesofsjm\image 3782.svg" alt="logo1"/></li>
          <li className="abt4"><img src="imagesofsjm\Frame (2).svg" alt="locn"/>
          Ward No.1, Halepete Road, Birur, Kadur Talluk, Chikkamagaluru District-577116</li>
          <li className="abt4"><img src="imagesofsjm\Frame (1).svg" alt="mail"/>
          353sjmpbirur@gmail.com</li>
          <li className="abt4"><img src="imagesofsjm\Frame.svg" alt="cont"/>(+08267)255874</li>
        </div>
        <div id="abt2">
          <h4>Quick links</h4>
          <li className="abt4">About</li>
          <li className="abt4">Apply Now</li>
          <li className="abt4">UG Programs</li>
          <li className="abt4">PG Programs</li>
          <li className="abt4">Announcements</li>
          <li className="abt4">Achademic Calender</li>
        </div>
        <div id="abt3">
          <h4>Important links</h4>
          <li className="abt4"><a href="http://localhost:3000/alumini">Alumini</a></li>
          <li className="abt4">Library</li>
          <li className="abt4">Web Mail</li>
          <li className="abt4">For Students</li>
          <li className="abt4">For Parents</li>
        </div>
      </div>
      <div id="abtuss" style={{display: 'flex', listStyle:'none'}}>
        <li className="end1">&copy; 2024 SJM Polytechnic. All Rights Reserved.</li>
        <li className="end1" style={{paddingLeft: '200px'}}><a href="home.js">Terms</a></li>
        <li className="end1"><a href="home.js">Privacy</a></li>
        <li className="end1"><a href="home.js">Cookies</a></li>
        <img src="imagesofsjm\face book.svg" alt="facebook" className="end1" style={{paddingLeft: '400px'}}/>
        <img src="imagesofsjm\twitter.svg" alt="twitter" className="end1"/>
        <img src="imagesofsjm\twitter (1).svg" alt="instagram" className="end1"/>
        <img src="imagesofsjm\youtub.svg" alt="youtube" className="end1"/>
      </div>
    </footer>

    );
}