import style from './style.module.scss';
import vector_1 from '../../images/vector11.svg';
import vector_2 from '../../images/vector2.svg';
import vector_3 from '../../images/vector3.svg';
import vector_4 from '../../images/vector4.svg';
import rectangle_1 from '../../images/rectangle1.svg';

const FourthPage = () => {
  return (
    <div className={style.mainContainer}>
      <article className={style.container}>
        <section className={style.main}>
          <div className={style.main__general}>
            <img src={vector_1} alt="#" />
            <div className={style.mainTag}>Подбираем ткань, фурнитуру вместе с вами</div>
            <p className={style.main__description}>
              Мы не просто примем заказ, но и поможем вам с выбором ткани, фурнитуры для вашей одежды, также расскажем о
              всех минусах и плюсах выбранных материалов.
            </p>
          </div>
        </section>
        <section className={style.main}>
          <div className={style.main__general}>
            <img src={vector_2} alt="#" />
            <div className={style.mainTag}>Профессиональное планирование</div>
            <p className={style.main__description}>
              Наша команда начинает работу над вашим заказом с профессионального планирования. Мы учитываем каждый этап
              производства и вычисляем оптимальное время выполнения заказа.
            </p>
          </div>
        </section>
        <section className={style.main}>
          <div className={style.main__general}>
            <img src={vector_3} alt="#" />
            <div className={style.mainTag}>Квалифицированные специалисты</div>
            <p className={style.main__description}>
              Во время производства каждого изделия проводится контроль качества на разных этапах, начиная с раскроя и
              заканчивая окончательной отделкой. Это позволяет выявлять и устранять дефекты на самых ранних этапах.
            </p>
          </div>
        </section>
        <section className={style.main}>
          <div className={style.main__general}>
            <img src={vector_4} alt="#" />
            <div className={style.mainTag}>Современное оборудование</div>
            <p className={style.main__description}>
              Мы оснащены промышленными швейными машинами разных типов, включая прямострочные, оверлочные, и остальные
              спец машинки, чтобы точно соответствовать различным швейным задачам.
            </p>
          </div>
        </section>
      </article>
      <div className={style.picture}>
        <section className={style.table}>
          <div className={style.table__tag}>Закажите у нас </div>
          <p className={style.table__paragraph}>
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className={style.table__button}>Связатся</button>
        </section>
        <img src={rectangle_1} alt="#" />
      </div>
    </div>
  );
};
export default FourthPage;
