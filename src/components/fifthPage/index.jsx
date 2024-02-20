import rectangle1 from '../../images/rectangle13.svg';
import rectangle2 from '../../images/Rectangle14.svg';
import rectangle3 from '../../images/Rectangle17.svg';
import rectangle4 from '../../images/Rectangle15.svg';
import rectangle5 from '../../images/Rectangle16.svg';
import '../../sass/components/_fifthpage.scss';

const FifthPage = () => {
  return (
    <article className="container5">
      <h3 className="h3_tag4">Каталог</h3>
      <div className="general5">
        <section className="rectangle_15">
          <div className="forImage5">
            <img src={rectangle1} alt="#" />
          </div>
        </section>
        <div className="rectangle_25">
          <section className="main5">
            <div className="pict_1">
              <img src={rectangle2} alt="#" />
            </div>
          </section>
          <section className="main5">
            <div className="pict_2">
              <img src={rectangle3} alt="#" />
            </div>
          </section>
          <section className="main5">
            <div className="pict_3">
              <img src={rectangle4} alt="#" />
            </div>
          </section>
          <section className="main5">
            <div className="pict_4">
              <img src={rectangle5} alt="#" />
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
export default FifthPage;
