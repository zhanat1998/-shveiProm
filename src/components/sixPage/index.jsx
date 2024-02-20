import '../../sass/components/_sixthpage.scss';
import rectangle_27 from '../../images/rectangle27.svg';
import rectangle_28 from '../../images/Rectangle28.svg';

const SixPage = () => {
  return (
    <div className="mainPage6">
      <section className="container6">
        <h3>Технология</h3>
        <div className="main6">
          <article className="general6">
            <div className="general__tag6">Технология</div>
            <div className="general__parag6">
              <p className="paragraph6">
                Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
                создании высококачественной одежды для мужчин, женщин и детей.
              </p>
              <p className="paragraph6">
                Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
                создании высококачественной одежды для мужчин, женщин и детей.
              </p>
            </div>
          </article>
          <div className="forImage6">
            <img src={rectangle_27} alt="#" />
          </div>
        </div>
      </section>
      <div className="picture6">
        <section className="table6">
          <div className="table6__tag6">Закажите у нас </div>
          <p className="table6__paragraph6">
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className="table6__button6">Связатся</button>
        </section>
        <img src={rectangle_28} alt="#" />
      </div>
    </div>
  );
};
export default SixPage;
