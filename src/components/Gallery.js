import React from 'react';
import './Gallery.css';
import image1 from '../images/image1.jpg'; // Update these paths as needed
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2> {/* Move the heading here */}
      <div className="gallery-left">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="gallery-right">
        <div className="gallery-image">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="gallery-image">
          <img src={image3} alt="Image 3" />
        </div>
        <div className="gallery-image">
          <img src={image4} alt="Image 4" />
        </div>
        <div className="gallery-image">
          <img src={image5} alt="Image 5" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
