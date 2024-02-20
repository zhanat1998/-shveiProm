import '../../sass/components/_firstpage.scss';
import picture_2 from '../../images/picture-2.svg';
const FirstPage = () => {
  return (
    <>
      <div className="main1">
        <div className="picture1">
          <img src={picture_2} alt="#" />
        </div>
        <div className="description1">
          <h3 className="h3_tag">Швейный цех который работает для вас </h3>
          <p className="description1__parag1">
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className="description1__button1">Связаться</button>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
