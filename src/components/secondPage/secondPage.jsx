import style from './style.module.scss';
import pictire_3 from '../../images/picture-3.svg';

const SecondPage = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.description}>
          <article className={style.description__tag}>Почему мы?</article>
          <article>
            <p className={style.description__text}>
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
            <p className={style.description__text}>
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
          </article>
        </div>
        <div className={style.forImage}>
          <img src={pictire_3} alt="#" />
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
