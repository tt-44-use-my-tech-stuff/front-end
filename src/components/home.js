import React from"react";
import LaptopIcon from '@material-ui/icons/Laptop';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { CenterFocusStrong } from "@material-ui/icons";

const home = ()=>{
return (
    <div>
   
 

    <div id="main">
       <section className='cta'>
         <div className="ctaText">
          <h2 className='ctaH2' >Use My Tech </h2> 
          <h4>Our mission is to offer a digital marketplace where anyone can rent the newest technology. With Use My Tech Stuff, you can <u>Rent Before You Buy,</u> promoting and enabling beginners or experienced techies to broaden their horizons at more accesible price. </h4>
         </div>
         <img className= 'droneImg' src="https://images.unsplash.com/photo-1469313785555-277fa0c1dc9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
     
    </section>
       
    <button className="camera">
      <CameraAltIcon className="iconImg" style={{ fontSize: 60 }} />
      <p>
        Camera
      </p>
    </button>

    <button className="sound">
      <SurroundSoundIcon className="iconImg" style={{ fontSize: 60 }} />
      <p>
        Sound
      </p>
    </button>


  <button className="visual">
    <VideoLabelIcon  className="iconImg" style={{ fontSize: 60 }}  />
      <p>
        Visual
      </p>
    </button>

    <button className="gaming">
      <SportsEsportsIcon  className="iconImg"style={{ fontSize: 60 }} />
      <p>
        Gaming
      </p>
    </button>

    <button className="computer">
      <LaptopIcon className="iconImg"style={{ fontSize: 60 }} />
      <p>
        Computer
      </p>
    </button>

    <button className="other">
    <MoreHorizIcon className="iconImg"style={{ fontSize: 60 }} />
      <p>
      Other
      </p>
    </button>
  </div>
  <footer>
    
    <h2> Copyright</h2>
    
    <address>     
    Written by <a href="mailto:webmaster@example.com">Alexis Marroquin, Will Berman, Emma Cooper, Alex Tran, Luiza Coelho, Jessica Veik, Will Moon, Austin Carman, Chelsea Ceballos </a>.<br/> 
    Visit us at: <br/>
    Example.com<br/>
    Box 564, Disneyland<br/>
    USA
    </address>

  </footer>
  </div>

  
)
}
export default home