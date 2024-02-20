import '../../sass/components/_secondpage.scss';
import pictire_3 from '../../images/picture-3.svg';

const SecondPage = () => {
  return (
    <div className="container2">
      <div className="main2">
        <div className="description2">
          <article className="description2__tag2">Почему мы?</article>
          <article>
            <p className="description2__text2">
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
            <p className="description2__text2">
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
          </article>
        </div>
        <div className="forImage2">
          <img src={pictire_3} alt="#" />
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
