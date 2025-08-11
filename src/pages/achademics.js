import Header from "../components/header";
import Footer from "../components/footer";
export default function Achademics(){
    return(
  <>
  <Header/>
   <hr/>
    <div id="achademics">
      <img style={{width: '1510px'}} src="imagesofsjm\image 3803.svg" alt="book" />
      <h6 id="achad1">Achademics</h6>
      <div id="prg1" className="achad1">
        <button>Programs</button>
        <div id="prg2">
          <a href="home.js">Programs1</a>
          <a href="home.js">Programs2</a>
          <a href="home.js">Programs3</a>
        </div>
      </div>
      <div id="spec1" className="achad2">
        <button>Specialization</button>
        <div id="spec2">
          <a href="home.js">Specialization1</a>
          <a href="home.js">Specialization2</a>
          <a href="home.js">Specialization3</a>
        </div>
      </div>
    </div>
    <h1 id="head">Unleash Your Potential</h1>
    <p id="para">
      Choose from a range of majors and programs that will have you career-ready
      from day one. There’s a reason Alverno graduates stand out from the crowd.
    </p>
    <div className="branch">
      <li className="branch1"><img src="imagesofsjm\image 3805.svg" alt="cse"/>
      <h2 style={{position:'absolute',top:'970px',left:'260px',color:'white'}}>CSE</h2></li>
      <li className="branch1"><img src="imagesofsjm\image 3806.svg" alt="cse"/>
      <h2 style={{position:'absolute',top:'970px',left:'720px',color:'white'}}>AI & ML</h2></li>
      <li className="branch1"><img src="imagesofsjm\image 3807.svg" alt="cse"/>
      <h2 style={{position:'absolute',top:'970px',left:'1180px',color:'white'}}>ECE</h2></li>
    </div>
    <div className="branch">
      <li className="branch1"><img src="imagesofsjm\Frame 1261154304.svg" alt="cse"/></li>
      <li className="branch1"><img src="imagesofsjm\image 3809.svg" alt="cse"/>
      <h2 style={{position:'absolute',top:'1305px',left:'720px',color:'white'}}>ME</h2></li>
      <li className="branch1"><img src="imagesofsjm\image 3810.svg" alt="cse"/>
      <h2 style={{position:'absolute',top:'1305px',left:'1180px',color:'white'}}>Civil</h2></li>
    </div>
    <div id="footer-container"></div>
    <script src="SJM.js"></script>
    <Footer/>
  </>

    );
}