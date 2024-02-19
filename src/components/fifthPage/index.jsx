import style from './style.module.scss';
import rectangle1 from '../../images/rectangle13.svg';
import rectangle2 from '../../images/Rectangle14.svg';
import rectangle3 from '../../images/Rectangle17.svg';
import rectangle4 from '../../images/Rectangle15.svg';
import rectangle5 from '../../images/Rectangle16.svg';

const FifthPage = () => {
  return (
    <article className={style.container}>
      <h3>Каталог</h3>
      <div className={style.general}>
        <section className={style.rectangle_1}>
          <img src={rectangle1} alt="#" />
        </section>
        <div className={style.rectangle_2}>
          <section className={style.main}>
            <img src={rectangle2} alt="#" />
          </section>
          <section className={style.main}>
            <img src={rectangle3} alt="#" />
          </section>
          <section className={style.main}>
            <img src={rectangle4} alt="#" />
          </section>
          <section className={style.main}>
            <img src={rectangle5} alt="#" />
          </section>
        </div>
      </div>
    </article>
  );
};
export default FifthPage;
