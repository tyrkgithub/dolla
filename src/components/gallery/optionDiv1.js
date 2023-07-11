// importing various folders/libraries to use here
import React, {Component} from "react";
import "./galleryDiv.css";
import Img1 from "../../assets/option1.jpg";
import Img2 from "../../assets/option2.jpg";
import Img3 from "../../assets/option3.jpg";
import Img4 from "../../assets/option4.jpg"
import Img5 from "../../assets/option5.jpg"


class OptionDiv1 extends Component {
  render() {
  return (
    <div className="wrapper">
    <section className="option-grid">
     
      <div className="option-gridArea">
        <div className="optionOne"
        style={{ backgroundImage: `url(${Img1})` }}>
        </div>
   
        <div className="optionTwo"
        style={{ backgroundImage: `url(${Img2})` }}>
        </div>

        <div className="optionThree"
        style={{ backgroundImage: `url(${Img3})` }}>
        </div>

        <div className="optionFour"
        style={{ backgroundImage: `url(${Img4})` }}>
        </div>

        <div className="optionFive"
        style={{ backgroundImage: `url(${Img5})` }}>
        </div>
      </div>

    </section>
    </div>
  );
}
}

export default OptionDiv1;