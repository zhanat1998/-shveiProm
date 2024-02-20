import '../../sass/components/_footer.scss';
import first from '../../images/first.svg';
import second from '../../images/second.svg';
import third from '../../images/third.svg';

const Footer = () => {
  return (
    <section className="containerf">
      <article className="forPicturef">
        <img src={first} alt="#" />
      </article>
      <div className="mainf">
        <article className="mainf__tagf">
          <img src={second} alt="#" />
          <a href="#">+996 559 332 187</a>
        </article>
        <article className="mainf__tagf">
          <img src={third} alt="#" />
          <a href="#">Г. Бишкек, Ул. Переулок Лагерный</a>
        </article>
      </div>
    </section>
  );
};
export default Footer;
