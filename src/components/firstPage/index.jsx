import style from './style.module.scss';
import picture_2 from '../../images/picture-2.svg';
const FirstPage = () => {
  return (
    <>
      <div className={style.main}>
        <img className={style.picture} src={picture_2} alt="#" />
        <div className={style.description}>
          <h3>Швейный цех который работает для вас </h3>
          <p className={style.description__parag}>
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className={style.description__button}>Связаться</button>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
