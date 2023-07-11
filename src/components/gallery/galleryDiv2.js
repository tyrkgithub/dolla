// importing various folders/libraries to use here
import React, {Component} from "react";
import "./galleryDiv.css";
import Img1 from "../../assets/pic21.jpg";
import Img2 from "../../assets//pic8.jpg";
import Img3 from "../../assets/pic16.jpg";


class GalleryDiv2 extends Component {
  render() {
  return (
    <div className="wrapper">
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
    </div>
  );
}
}

export default GalleryDiv2;