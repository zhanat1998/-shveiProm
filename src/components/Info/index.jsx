import './style.scss';
import infoPicture from '../../picture/info_picture.png';
const Info = () => {
  return (
    <section className="section__information">
      <div className="container">
        <div className="information">
          <div className="information__texts">
            <h3 className="information__title">Почему мы?</h3>
            <p className="information__text">
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
            <p className="information__text">
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
          </div>
          <div className="information__picture">
            <img src={infoPicture} className="picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
