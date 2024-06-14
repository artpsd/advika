import React from 'react';
import './Gallery.css';
import image1 from '../images/image1.jpg'; // Update these paths as needed
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';



const Gallery = () => {
  return (
    <>
    <h2>Gallery</h2>
    <div className="gallery">
      <div className="gallery-left">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="gallery-right">
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image4} alt="Image 4" />
          <img src={image5} alt="Image 5" />
        
      </div>
    </div>
    <div className="gallery">
      <div className="gallery-left2">
      <div className="gallery-image">
          <img src={image6} alt="Image 6" />
        </div>
        <div className="gallery-image">
          <img src={image7} alt="Image 7" />
        </div>
        <div className="gallery-image">
          <img src={image8} alt="Image 8" />
        </div>
        <div className="gallery-image">
          <img src={image9} alt="Image 9" />
        </div>
      </div>
      <div className="gallery-right2">
      <img src={image1} alt="Image 9" />
      </div>
    </div>
    </>
  );
};

export default Gallery;
