import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Misc from "./components/Misc";

import "./Styles/App.scss"
import "./Styles/Intro.scss"
import "./Styles/Section.scss"
import "./Styles/Color.scss"
import "./Styles/Footer.scss" 
import "./Styles/Misc.scss"

import "./Styles/mediaQuery.scss"

import freshTopicImg from "./assets/academy.png"
import freshTopic2Img from "./assets/story.png"
import tedTalksImg from "./assets/in-the-news.gif"
import franchiseImg from "./assets/franchise.gif"
import mapImg from "./assets/locations.png"
import coursesImg from "./assets/image2.png"
import albumImg from "./assets/mba-cares.gif"
import baratImg from "./assets/image1.png"
import chaiwalaImg from "./assets/image3.png"


import data from "./data/data.json"
import { useEffect } from "react";


const yellow="#fff100",
pink="#ed1e79",
red=":#d20120",
white="#fff",
brown="#6d3d0f";
function App() {

  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala }=data;
  
  const dotCursor=(e)=>{
      const cursor=document.querySelector(".cursor");
      
      cursor.style.top = `${e.pageY - 14}px`
      cursor.style.left = `${e.pageX - 14}px`
      const element=e.target;
      if(element.getAttribute("data-cursorpointer")){
          cursor.classList.add("cursorHover")
      }
      else if(element.getAttribute("data-cursorpointermini")){
          cursor.classList.add("cursorHoverMini")
      }
      else{
          cursor.classList.remove("cursorHover")
          cursor.classList.remove("cursorHoverMini")
      }
  }
  useEffect(() => {
    window.addEventListener("mousemove",dotCursor);
    return () => {
      window.removeEventListener("mousemove",dotCursor);
    };
  }, []);
  
  return (
    <>
     <IntroVideo/>
     <Section 
     h3={freshTopic.heading} 
     text={freshTopic.text}
     btn={freshTopic.btn}
     img={freshTopicImg} 
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={yellow}
     btnColor={pink}
     />


<Section 
     h3={freshTopic2.heading} 
     text={freshTopic2.text}
     btn={freshTopic2.btn}
     img={freshTopic2Img} 
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={yellow}
     btnColor={pink}
     />



<Section 
     h3={tedTalks.heading} 
     text={tedTalks.text}
     btn={tedTalks.btn}
     img={tedTalksImg} 
     backgroundColor={yellow}
     headingColor={pink}
     textColor={pink}
     btnBgColor={pink}
     btnColor={yellow}
     />


<Section 
     h3={franchise.heading} 
     text={franchise.text}
     btn={franchise.btn}
     img={franchiseImg} 
     backgroundColor={white}
     headingColor={pink}
     textColor={brown}
     btnBgColor={brown}
     btnColor={yellow}
     />


<Section 
     h3={map.heading} 
     text={map.text}
     img={mapImg} 
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={brown}
     btnColor={yellow}
     hasbtn={false}
     />


<Section 
     h3={courses.heading} 
     text={courses.text}
     btn={courses.btn}
     img={coursesImg} 
     imgsize="30%"
     backgroundColor={yellow}
     headingColor={pink}
     textColor={pink}
     btnBgColor={pink}
     btnColor={yellow}
     />


<Section 
     h3={album.heading} 
     text={album.text}
     btn={album.btn}
     img={albumImg} 
     backgroundColor={white}
     headingColor={pink}
     textColor={brown}
     btnBgColor={brown}
     btnColor={yellow}
     />



<Section 
     h3={barat.heading} 
     text={barat.text}
     btn={barat.btn}
     img={baratImg} 
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={yellow}
     btnColor={pink}
     />



<Section 
     h3={chaiwala.heading} 
     text={chaiwala.text}
     btn={chaiwala.btn}
     img={chaiwalaImg} 
     backgroundColor={white}
     headingColor={pink}
     textColor={brown}
     btnBgColor={brown}
     btnColor={yellow}
     />
  


    <Footer/>
    <Misc/>
    </>

  );
}

export default App;
