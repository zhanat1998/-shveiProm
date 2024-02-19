import style from './style.module.scss';
import lastImage from '../../images/last.svg';

const SeventhPage = () => {
  return (
    <section className={style.container}>
      <h3>Наша локация</h3>
      <div className={style.main}>
        <img src={lastImage} alt="" />
      </div>
    </section>
  );
};
export default SeventhPage;
