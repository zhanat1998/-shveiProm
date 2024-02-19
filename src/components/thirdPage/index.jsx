import style from './style.module.scss';
import picture_4 from '../../images/picture-4.svg';
import picture_5 from '../../images/picture-5.svg';
import picture_6 from '../../images/picture-6.svg';
import picture_7 from '../../images/picture-7.svg';

const ThirdPage = () => {
  return (
    <article className={style.container}>
      <h2>Наши премущества</h2>
      <div className={style.forBody}>
        <section className={style.main}>
          <img className={style.main__image} src={picture_4} alt="#" />
          <p className={style.text}>Подбираем ткань, фурнитуру вместе с вами</p>
        </section>
        <section className={style.generate}>
          <img className={style.generate__image} src={picture_5} alt="#" />
          <p className={style.text}>Профессиональное планирование</p>
        </section>
        <section className={style.generate}>
          <img className={style.generate__image} src={picture_6} alt="#" />
          <p className={style.text}>Квалифицированные специалисты</p>
        </section>
        <section className={style.main}>
          <img className={style.main__image} src={picture_7} alt="#" />
          <p className={style.text}>Современное оборудование</p>
        </section>
      </div>
    </article>
  );
};
export default ThirdPage;
