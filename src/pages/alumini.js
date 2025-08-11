/*import React, { useEffect } from 'react';
import { gsap } from 'gsap';*/
import Header from "../components/header";
import Footer from "../components/footer";

const MovingImages = () => {
  /* useEffect(() => {
     const images = document.querySelectorAll(".image");
 
     const tl = gsap.timeline({ repeat: -1 });
 
      tl.fromTo(
       images[0],
       { x: "-1350px" },
         {x: "1550px",
         duration: 5, 
         ease: "linear",
       },
       "-=10"
     );
 
     tl.fromTo(
       images[1],
       { x: "-2700px" }, 
       {
         x: "1600px",
         duration: 10, 
         ease: "linear",
       },
       "-=5"
     );
     
 
   }, []);*/

  return (
    <>
      <Header /><br /><br /><br /><br />
      <div style={{ display: 'flex', width: '100%' }}>
        { /*  <div className="image" style={{ flexShrink: 0 }}>
        <img src="/imagesofsjm/sjm6.jpg" alt="one" style={{ width: '60%', height: '500px' }} />
      </div>*/}
        <div className="image" style={{ flexShrink: 0, margin: "10px" }}>
          <img src="/imagesofsjm/sjm10.jpg" alt="three" style={{ width: '100%', height: '400px' }} />
        </div>
        <div><br />
          <h1>News</h1><hr /><hr />
          <div style={{ display: 'flex', margin: "10px" }}>
            <img id="aluimg" src="/imagesofsjm/sjm20.jpg" alt="alu" style={{ width: "150px", height: "150px" }} />

            <p style={{ padding: "15px" }}><b>18 FEB 2024</b><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores doloremque, esse minima exercitationem ut, provident nemo eius accusantium assumenda ratione id, illo doloribus. Necessitatibus placeat, rem sequi ullam nam totam!<br /><button>Read More</button></p>
          </div><div style={{ display: 'flex' }}><img src="/imagesofsjm/sjm21.jpg" alt="alum" style={{ width: "150px", height: "150px" }} />
            <p style={{ padding: "15px" }}><b>18 FEB 2024 </b><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores doloremque, esse minima exercitationem ut, provident nemo eius accusantium assumenda ratione id, illo doloribus. Necessitatibus placeat, rem sequi ullam nam totam!<br /><button>Read More</button></p>
          </div><button style={{ marginLeft: "500px" }}>More News</button></div>
      </div>
      <div id="vimission">
        <div style={{ marginLeft: "70px" }}><img src="imagesofsjm\sjm16.jpeg" alt="vision" style={{ width: "300px", height: "300px", padding: "20px" }} /></div>
        <div id="vimissionone"><h2 style={{ textAlign: "center" }}>Vision</h2>
          <p style={{ padding: "20px", textAlign: "center" }}>To nurture in our Alumni a sense of community and life-long bonding with the University</p><br />
          <h2 style={{ textAlign: "center" }}>Mission</h2>
          <p style={{ padding: "20px", textAlign: "center" }}>To undertake programmes that promote Alumni-Student interaction, a culture of sharing, and to cultivate a durable relationship between Alumni and the University</p>
        </div>
      </div>
      <div id="events">
        <div className="eventone" id="firstevent" style={{borderRight: "solid 2px black", paddingLeft: "50px"}}>
          <div className="eventtwo"><h4>Star Alumnus</h4>
            <img src="imagesofsjm\sjm22.jpeg" alt="aluminione" style={{width:"100px",height:"100px"}}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate praesentium, labore minus alias unde dolore neque. Ratione, excepturi cumque est rerum nobis ipsa tempora nisi, eligendi sed voluptas tempore.</p>
            <button>More</button></div>
          <div className="eventtwo"><br/><img src="imagesofsjm\sjm23.jpg" alt="aluminitwo" style={{width:"100px",height:"100px"}}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente ea dolorem consequatur cupiditate velit sed praesentium. Autem soluta voluptatibus ratione unde velit quisquam vitae eum impedit tenetur, neque eius!</p>
            <button>More</button></div>
        </div>
        <div className="eventone" style={{borderLeft: "solid 2px black"}}><h4>Our New Events</h4>
          <img src="imagesofsjm\sjm26.jpg" alt="" style={{width:"300px",height:"150px"}}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi sapiente vel dolores labore quam porro. Quae, magni neque maiores cupiditate, ea autem doloremque fugit quasi facilis, repellendus mollitia temporibus.</p><button>View More</button></div>
      </div>
      <div style={{display:"flex",margin:"50px",marginRight:"60px"}}>
        <div style={{display:"flex",width:"70%",paddingRight:"50px"}}>
          <div>
            <h4>Alumini Achievements</h4><hr/>
          <img src="imagesofsjm\sjm24.jpg" alt="achivedone" style={{width:"100px",height:"100px",paddingBottom:"20px"}}/>
          <img src="imagesofsjm\sjm25.jpg" alt="achievedtwo" style={{width:"100px",height:"100px"}}/>
          </div>
          <div><br/><br/>
            <p  style={{padding:"20px"}}><b>Alumini Award of Distinction</b><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis sequi quas alias, ex voluptatum inventore maxime! Molestiae esse non in tempore numquam quaerat! Consequuntur voluptate sit saepe ad reprehenderit!<a href="sdgh">Read More</a></p>
            <p  style={{padding:"20px"}}><b>Alumini Award of Distinction</b><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis sequi quas alias, ex voluptatum inventore maxime! Molestiae esse non in tempore numquam quaerat! Consequuntur voluptate sit saepe ad reprehenderit!<a href="sdgh">Read More</a></p>
          </div>
        </div>
       
        <div style={{display:"flex",width:"20%",padding:"20px"}}>
          <div><h4>Photo Gallery</h4><hr/>
            <img src="imagesofsjm\sjm27.jpg" alt="memori" style={{width:"100px",height:"100px",paddingBottom:"20px"}}/>
            <img src="imagesofsjm\sjm28.jpg" alt="memori" style={{width:"100px",height:"100px"}}/>
          </div>
          <div><br/> <img src="imagesofsjm\sjm29.jpg" alt="sports" style={{width:"100px",height:"100px",paddingBottom:"20px"}}/>
           <img src="imagesofsjm\sjm30.jpeg" alt="dance" style={{width:"100px",height:"100px"}}/><br/><a href="fhjk">View more</a>
          </div>
        </div>
      </div>
      <Footer /></>
  );
};

export default MovingImages;