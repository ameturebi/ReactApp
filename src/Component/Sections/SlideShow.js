import React from 'react';
import image1 from '../Image/228x228SC.DN01 (1).jpg';
import image2 from '../Image/476x268.jpg';
import image3 from '../Image/476x268 (2).jpg';
import image4 from '../Image/476x268 (1).jpg';
import image5 from '../Image/834x472.jpg';
import image6 from '../Image/2500x1406 (2).jpg';
import image7 from '../Image/2500x1406 (9).jpg';
import image8 from '../Image/2500x1406 (3).jpg';
import image9 from '../Image/2500x1406 (1).jpg';
import image10 from '../Image/2500x1406 (4).jpg';
import image11 from '../Image/2500x1406 (5).jpg';
import image12 from '../Image/2500x1406 (6).jpg';
import image13 from '../Image/2500x1406 (7).jpg';
import image14 from '../Image/2500x1406 (8).jpg';
import style from '../CSS/style.css';

function SlideShow() {
  return (
    <div>
      <section className="slideshow">
        <div className="slideshow-container">
          <div className="slide">
            <img src={image6} alt="Image 6" />
            <img src={image7} alt="Image 7" />
            <img src={image8} alt="Image 8" />
            <img src={image9} alt="Image 9" />
            <img src={image10} alt="Image 10" />
            <img src={image11} alt="Image 11" />
            <img src={image12} alt="Image 12" />
            <img src={image13} alt="Image 13" />
            <img src={image14} alt="Image 14" />
          </div>
        </div>

        <section className="second-slideshow">
          <div className="slideshow-cont">
            <div className="second-slide">
              <img src={image1} alt="Image 1" />
              <img src={image2} alt="Image 2" />
              <img src={image3} alt="Image 3" />
              <img src={image4} alt="Image 4" />
              <img src={image5} alt="Image 5" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default SlideShow;
