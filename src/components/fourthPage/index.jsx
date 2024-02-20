import '../../sass/components/_fourthpage.scss';
import vector_1 from '../../images/vector11.svg';
import vector_2 from '../../images/vector2.svg';
import vector_3 from '../../images/vector3.svg';
import vector_4 from '../../images/vector4.svg';
import rectangle_1 from '../../images/rectangle1.svg';

const FourthPage = () => {
  return (
    <div className="mainContainer4">
      <article className="container4">
        <section className="main4">
          <div className="main4__general4">
            <img src={vector_1} alt="#" />
            <div className="mainTag4">Подбираем ткань, фурнитуру вместе с вами</div>
            <p className="main4__description4">
              Мы не просто примем заказ, но и поможем вам с выбором ткани, фурнитуры для вашей одежды, также расскажем о
              всех минусах и плюсах выбранных материалов.
            </p>
          </div>
        </section>
        <section className="main4">
          <div className="main4__general4">
            <img src={vector_2} alt="#" />
            <div className="mainTag4">Профессиональное планирование</div>
            <p className="main4__description4">
              Наша команда начинает работу над вашим заказом с профессионального планирования. Мы учитываем каждый этап
              производства и вычисляем оптимальное время выполнения заказа.
            </p>
          </div>
        </section>
        <section className="main4">
          <div className="main4__general4">
            <img src={vector_3} alt="#" />
            <div className="mainTag4">Квалифицированные специалисты</div>
            <p className="main4__description4">
              Во время производства каждого изделия проводится контроль качества на разных этапах, начиная с раскроя и
              заканчивая окончательной отделкой. Это позволяет выявлять и устранять дефекты на самых ранних этапах.
            </p>
          </div>
        </section>
        <section className="main4">
          <div className="main4__general4">
            <img src={vector_4} alt="#" />
            <div className="mainTag4">Современное оборудование</div>
            <p className="main4__description4">
              Мы оснащены промышленными швейными машинами разных типов, включая прямострочные, оверлочные, и остальные
              спец машинки, чтобы точно соответствовать различным швейным задачам.
            </p>
          </div>
        </section>
      </article>
      <div className="picture4">
        <section className="table4">
          <div className="table4__tag4">Закажите у нас </div>
          <p className="table4__paragraph4">
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className="table4__button4">Связатся</button>
        </section>
        <div className="forImage4">
          <img src={rectangle_1} alt="#" />
        </div>
      </div>
    </div>
  );
};
export default FourthPage;
