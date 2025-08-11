import Header from "../components/header";
import Footer from "../components/footer";
export default function About(){
    return (
          <body>
           <Header/>
            <hr />
            <h1
              style={{
                position: 'absolute',
                marginTop: '250px',
                marginLeft: '700px',
                color: 'white',
                fontSize: '40px',
              }}
            >
              About us
            </h1>
            <img src="imagesofsjm\image 3797.svg" alt="clg" id="abimg" />
            <div id="history">
              <div id="hist2">
                S.J.M. Polytechnic (SJMP) was established in 1984 under the guidance of
                Sri Sri Sri Mallikarjuna Murugharajendra Mahaswamiji, President of the
                SJM Vidyapeetha, Chitradurga. Located in Birur, Kadur Taluk of
                Chikmagalur District, SJMP is a renowned educational institution.It is
                conveniently situated along National Highway 206 (Bangalore-Honnavar),
                providing easy access via road and rail, and is approximately 200
                kilometers from Bangalore. The institute is affiliated with the
                Directorate of Technical Education (DTE), Bengaluru, approved by the All
                India Council for Technical Education (AICTE), New Delhi, and recognized
                by the Government of Karnataka.
              </div>
              <div id="his1">
                <img id="hist11" src="imagesofsjm\image 3799.svg" alt="frnd" />
                <img id="hist12" src="imagesofsjm\image 3798.svg" alt="clggg" />
              </div>
            </div>
            <div id="vision">
              <img id="vis1" src="imagesofsjm\image 3801.svg" alt="goal" />
              <div className="vis2">
                <h1 style={{paddingBottom: '30px'}}>Our Vision</h1>
                <p style={{color: '#272e36'}}>
                  The vision of being the leading Catholic, Franciscan college reflects
                  a commitment to providing education grounded in Catholic and
                  Franciscan values. As a Catholic institution, the college emphasizes
                  moral responsibility, community service, and spiritual growth,
                  promoting a holistic approach where academic excellence is intertwined
                  with faith and ethics.
                </p>
              </div>
            </div>
            <div id="mission">
              <div className="vis2">
                <h1 style={{paddingBottom: '30px'}}>Our Mission</h1>
                <p style={{color: '#272e36'}}>
                  The vision of being the leading Catholic, Franciscan college reflects
                  a commitment to providing education grounded in Catholic and
                  Franciscan values. As a Catholic institution, the college emphasizes
                  moral responsibility, community service, and spiritual growth,
                  promoting a holistic approach where academic excellence is intertwined
                  with faith and ethics.
                </p>
              </div>
              <img  style={{paddingLeft: '80px',paddingRight: '0px'}} src="imagesofsjm\image 3802.svg" alt="mission" />
            </div>
            <div id="numbers">
              <div id="num1" className="numb">
                <h2>400+</h2>
                <p>Lectures</p>
              </div>
              <div id="num2"  className="numb">
                <h2>500+</h2>
                <p>Recuriters</p>
              </div>
              <div id="num3"  className="numb">
                <h2>10,000</h2>
                <p>Students</p>
              </div>
            </div>
            <div id="footer-container"></div>
            <script src="SJM.js"></script>
            <Footer/>
          </body>
        
    );
}