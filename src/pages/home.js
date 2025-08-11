import Header from "../components/header";
import Footer from "../components/footer";

export default function Home(){
  const handleClick = () => { alert('Button clicked!'); };

    return(
      <>
          
          <Header/>
          <header id="adm">
              <div id="adm2">
                <h1>You <span className="txtcoloring">become</span></h1>
                <h1>what you deeply</h1>
                <h1><span className="txtcoloring">believe</span></h1>
                <button id="admbtn" onClick={handleClick}>Admissions open</button><br />
                </div>
                <div>
              <img
                  id="adm1"
                  src="imagesofsjm\youngsters-enjoying-studies_23-2147666401 1.svg"
                  alt="studens"
                />
                </div>
                <ul id="adm3">
                  <li className="adm4">
                    <h1>20K+</h1>
                    <br />
                    <h3>Admissions</h3>
                  </li>
                  <li className="adm4">
                    <h1>10K+</h1>
                    <br />
                    <h3>Academics</h3>
                  </li>
                  <li className="adm4">
                    <h1>5K+</h1>
                    <br />
                    <h3>Placements</h3>
                  </li>
                  <li className="adm4">
                    <h1>2K+</h1>
                    <br />
                    <h3>Research</h3>
                  </li>
                  <li className="adm4">
                    <h1>300</h1>
                    <br />
                    <h3>Facilities</h3>
                  </li>
                </ul>
          </header>
          <div id="programs">
            <div className="txtofpr">
              <h1>Programs Offered</h1><br/>
              <p>
                Our college's strong infrastructure supports
                achademic and recreational activities, promoting
                student well-bieng and growth. State-of-the art
                facilities foster collaboration among students,
                teacher, and stakeholders, driving progress and
                excellence
              </p>
            </div>
            <div id="imgwttxofpr">
               <img id="imgwttxofpr1" style={{float: 'left'}} src={'imagesofsjm\\u10677961 1.svg'} alt="degree" />
              <h1>
                Electronics and Communication engineering
              </h1>
             
              <img style={{float: 'right'}}
              src="imagesofsjm\DeWatermark.ai_1725515936293 (1) 1.svg"
              alt="girl"
            /><br/>
              <p>
                Electronics and Communication engineering<br/>
                is foundational to modern innovation,driving advancements in AI,<br/>
                IOT(Internet of Things), 5G, automation, and more
              </p>
            </div>
          </div>
          <div className="act1" id="activities1">
            <div className="comn" id="act2">
              <img src="imagesofsjm\image 3776.svg" alt="library"/><br/><br/>
              <h2>Study Centers</h2><br/>
              <p>which aims to promote moral values among the students and bring discipline across all walks of life</p>
            </div>
            <div className="comn" id="act3">
              <img  src="imagesofsjm\image 3778.svg" alt="sports"/><br/><br/>
              <h2>Sports</h2><br/>
              <p>The campus features versatile multi-purpose halls that can accomodate various capacities</p>
            </div>
          </div>
            <div className="act1" id="activities2">
              <div className="comn" id="act4">
                <img  src="imagesofsjm\unsplash_rGUMKBkOH7A.svg" alt="Cultural activities"/><br/><br/>
                <h2>Cultural activities</h2><br/>
                <p>A constellation of service, aimed at enhancing the health and well-bieng of students in higher.</p>
              </div>
              <div className="comn" id="act5">
                <img  src="imagesofsjm\image 3781.svg" alt="lab"/><br/><br/>
                <h2>Laboratories</h2><br/>
                <p>The college features state-of-the-art Computer labs with internet access, add value addition program</p>
              </div>
            </div>
            <div id="achiv1">
              <div id="achiv2">
                <h1>Our Achievements</h1>
                <p>The institution boosts excellents physical and knowledge infrastructures, designed to foster holistic student learning,
                  evident in both achedemic and extracurricular achievements.
                </p>
                <div id="achiv3">
                  <div id="achiv4"style={{background:"url('Rectangle_411.svg')",
    backgroundRepeat: 'no-repeat',
    marginTop: '30px',
    paddingLeft: '50px',
    paddingRight: '50px'}}>
                    <h2>India Today Group</h2>
                    <h2 style={{paddingBottom: '20px'}}>MDRA Survey, 2022</h2>
                    <svg height="100" width="100"  style={{padding: '15px'}}>
                      <circle r="35" cx="50" cy="60" fill="white"/>
                      <text x="20" y="15">Ranked</text>
                      <text x="40" y="73" fill="#013979" fontSize="30px" fontWeight="bold">1</text>
                      <text x="53" y="50" fill="#013979" fontWeight="bold">st</text>
                    </svg> 
                    <svg height="100" width="100" style={{padding: '15px'}}>
                      <circle r="35" cx="35" cy="60" fill="white"/>
                      <text x="5" y="15">Ranked</text>
                      <text x="18" y="72" fill="#013979" fontSize="30px"fontWeight="bold">41</text>
                      <text x="50" y="50" fill="#013979" fontWeight="bold">st</text>
                    </svg> 
                    <svg height="100" width="100" style={{padding: '15px'}}>
                      <circle r="35" cx="35" cy="60" fill="white"/>
                      <text x="5" y="15">Ranked</text>
                      <text x="25" y="72" fill="#013979" fontSize="30px" fontWeight="bold">6</text>
                      <text x="45" y="55" fill="#013979" fontWeight="bold">th</text>
                    </svg> </div>
                  <div id="achiv5">
                    <h2>Educational world 2022-2023</h2>
                    <h2  style={{paddingBottom: '20px'}}>Survey Ranking</h2>
                    <svg height="100" width="100" style={{padding: '15px'}}>
                      <circle r="35" cx="35" cy="60" fill="white"/>
                      <text x="5" y="15">Ranked</text>
                      <text x="17" y="73" fill="#013979" fontSize="30px" fontWeight="bold">16</text>
                      <text x="45" y="50" fill="#013979" fontWeight="bold">th</text>
                    </svg>
                    <svg height="100" width="100" style={{padding: '15px'}}>
                      <circle r="35" cx="35" cy="60" fill="white"/>
                      <text x="5" y="15">Ranked</text>
                      <text x="25" y="72" fill="#013979" fontSize="30px" fontWeight="bold">2</text>
                      <text x="43" y="55" fill="#013979" fontWeight="bold">nd</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="facility1">
              <p style={{fontSize: '40px'}}>Our Facilities</p><br/>
              <p>Infrastructural excellence is the cornerstone of any successful education institution.
                We are proud of offer a wide range of facilities designed to meet both the achademic and recreational needs of our students.
                These facilities incorporate the latest technologies to ensure students' comfort and well-bieng, while also fostering their physical and intellectual growth. 
              </p>
            </div> 
            <div id="wps">
              <h1>What people say</h1>
              <p>Get a glimpse of what our torchbearers have to say about their college experiences and the professional and personal dreams they've accomplished.</p>
              <div id="wps1">
                <div className="wps2">
                  <img src="imagesofsjm\Frame 1261154250.svg" alt="std1"/>
                  <br/><br/>
                  <h4>Joseph</h4>
                  <br/>
                  <p>"I would like to extend my heartfelt thanks to this college for bieng a piller of strength when I was just 
                    starting out in my sports career. The unwavering support and guidence."
                  </p>
                </div>
                <div className="wps2">
                  <img src="imagesofsjm\Frame 1261154250 (1).svg" alt="std1"/><br/><br/>
                  <h4>Andrew</h4><br/>
                  <p>"I would like to extend my heartfelt thanks to this college for bieng a piller of strength when I was just 
                    starting out in my sports career. The unwavering support and guidence."
                  </p>
                </div>
                <div className="wps2">
                  <img src="imagesofsjm\Frame 1261154250 (2).svg" alt="std1"/><br/><br/>
                  <h4>Perry</h4><br/>
                  <p>"I would like to extend my heartfelt thanks to this college for bieng a piller of strength when I was just 
                    starting out in my sports career. The unwavering support and guidence."
                  </p>
                </div>
              </div>
            </div>
            <div id="comp">
              <img src="imagesofsjm\th (2) 1.svg" alt="tcs"/>
              <img src="imagesofsjm\Rectangle 309.svg" alt="tech"/>
              <img src="imagesofsjm\Rectangle 325.svg" alt="tech mahindra"/>
              <img src="imagesofsjm\th (1) 2.svg" alt="ibm"/>
              <img src="imagesofsjm\th 1.svg" alt="accenture"/>
            </div>
            
          <script src="SJM.js"></script>
          <Footer/>
        </>
    );
}