import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "./slider.css";
import Images from "./Images";
import i1 from "../../Images/Boats/1.jpg";
import i2 from "../../Images/Boats/2.jpg";
import i3 from "../../Images/Boats/3.jpg";
import i4 from "../../Images/Boats/4.jpg";

const Slider = () => {
  const [x, setX] = useState(0);
  const sliderArray = [
    <Images src={i1} />,
    <Images src={i2} />,
    <Images src={i3} />,
    <Images src={i4} />,
  ];
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="overlay">

      <div className="slider">
        {sliderArray.map((item, index) => {
          return (

            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >


              {item}

            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}>
          <FontAwesomeIcon size='2x' icon={faChevronLeft} />
        </button>
        <button id="goRight" onClick={goRight}>
          <FontAwesomeIcon size='2x' icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
