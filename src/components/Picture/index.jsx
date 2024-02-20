import React from 'react';
import './style.scss';
import image1 from '../../picture/image1.png';
import image2 from '../../picture/image2.png';
import image3 from '../../picture/image3.png';
import image4 from '../../picture/image4.png';

const Picture = () => {
  return (
    <section id="Каталог">
      <div className="container">
        <div className="pictures">
          <h3 className="pictures__title">Каталог</h3>
          <div className="pictures__grid">
            <div className="pictures__block">
              <img className="picture" src={image1} alt="" />
            </div>
            <div className="pictures__grid">
              <img className="picture_2" src={image2} alt="" />
              <img className="picture_2" src={image3} alt="" />
              <img className="picture_2" src={image4} alt="" />
              <img className="picture_2" src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Picture;
