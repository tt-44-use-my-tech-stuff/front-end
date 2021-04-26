import React from"react";
import LaptopIcon from '@material-ui/icons/Laptop';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const home = ()=>{
return (
    <div>

    
    <div id="main">

    <button className="camera">
    <CameraAltIcon/>
      <h2>
        camera
      </h2>
    </button>

    <button className="sound">
    <SurroundSoundIcon/>
      <h2>
        sound
      </h2>
    </button>


  <button className="visual">
    <VideoLabelIcon/>
      <h2>
        visual
      </h2>
    </button>

    <button className="gaming">
    <SportsEsportsIcon/>
      <h2>
        gaming
      </h2>
    </button>

    <button className="computer">
    <LaptopIcon/>
      <h2>
        computer
      </h2>
    </button>

    <button className="other">
    <MoreHorizIcon/>
      <h2>
      other
      </h2>
    </button>
  </div>
  <footer>
    
    <h1> copyright</h1>
    
    <address>     
    Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br/> 
    Visit us at:<br/>
    Example.com<br/>
    Box 564, Disneyland<br/>
    USA
    </address>

  </footer>
  </div>

  
)
}
export default home