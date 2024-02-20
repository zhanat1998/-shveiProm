import '../../sass/components/_thirdpage.scss';
import picture_4 from '../../images/picture-4.svg';
import picture_5 from '../../images/picture-5.svg';
import picture_6 from '../../images/picture-6.svg';
import picture_7 from '../../images/picture-7.svg';

const ThirdPage = () => {
  return (
    <article className="container3">
      <h3 className="h3_tag_third">Наши премущества</h3>
      <div className="forBody3">
        <section className="main3">
          <div className="main3__image3">
            <img src={picture_4} alt="#" />
          </div>
          <p className="text3">Подбираем ткань, фурнитуру вместе с вами</p>
        </section>
        <section className="generate3">
          <div className="generate3__image3">
            <img src={picture_5} alt="#" />
          </div>
          <p className="text3">Профессиональное планирование</p>
        </section>
        <section className="generate3">
          <div className="generate3__image3">
            <img src={picture_6} alt="#" />
          </div>
          <p className="text3">Квалифицированные специалисты</p>
        </section>
        <section className="main3">
          <div className="main3__image3">
            <img src={picture_7} alt="#" />
          </div>
          <p className="text3">Современное оборудование</p>
        </section>
      </div>
    </article>
  );
};
export default ThirdPage;
