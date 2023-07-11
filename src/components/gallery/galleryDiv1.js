// importing various folders/libraries to use here
import React, {Component} from "react";
import "./galleryDiv.css";
import Img1 from "../../assets/pic9.jpg";
import Img2 from "../../assets//pic18.jpg";
import Img3 from "../../assets/pic11.jpg";


class GalleryDiv1 extends Component {
  render() {
  return (
    
    <section className="gallery-grid">
     
      <div className="gallery-gridArea">
        <div className="one"
        style={{ backgroundImage: `url(${Img1})` }}>
        </div>
   
        <div className="two"
        style={{ backgroundImage: `url(${Img2})` }}>
        </div>

        <div className="three"
        style={{ backgroundImage: `url(${Img3})` }}>
        </div>
      </div>

    </section>
 
  );
}
}

export default GalleryDiv1;