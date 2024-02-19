import style from './style.module.scss';
import rectangle_27 from '../../images/rectangle27.svg';
import rectangle_28 from '../../images/Rectangle28.svg';

const SixPage = () => {
  return (
    <div className={style.mainPage}>
      <section className={style.container}>
        <h3>Технология</h3>
        <div className={style.main}>
          <article className={style.general}>
            <div className={style.general__tag}>Технология</div>
            <div className={style.general__parag}>
              <p className={style.paragraph}>
                Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
                создании высококачественной одежды для мужчин, женщин и детей.
              </p>
              <p className={style.paragraph}>
                Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
                создании высококачественной одежды для мужчин, женщин и детей.
              </p>
            </div>
          </article>
          <div className={style.forImage}>
            <img src={rectangle_27} alt="#" />
          </div>
        </div>
      </section>
      <div className={style.picture}>
        <section className={style.table}>
          <div className={style.table__tag}>Закажите у нас </div>
          <p className={style.table__paragraph}>
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className={style.table__button}>Связатся</button>
        </section>
        <img src={rectangle_28} alt="#" />
      </div>
    </div>
  );
};
export default SixPage;
