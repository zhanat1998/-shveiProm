import style from './style.module.scss';
import first from '../../images/first.svg';
import second from '../../images/second.svg';
import third from '../../images/third.svg';

const Footer = () => {
  return (
    <section className={style.container}>
      <article className={style.forPicture}>
        <img src={first} alt="#" />
      </article>
      <div className={style.main}>
        <article className={style.main__tag}>
          <img src={second} alt="#" />
          <a href="#">+996 559 332 187</a>
        </article>
        <article className={style.main__tag}>
          <img src={third} alt="#" />
          <a href="#">Г. Бишкек, Ул. Переулок Лагерный</a>
        </article>
      </div>
    </section>
  );
};
export default Footer;
