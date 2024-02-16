import style from './style.module.scss';
import { Link } from 'react-router-dom';
import picture1 from '../../images/picture-1.svg';
const mainPage = '/';
const Navbar = () => {
  return (
    <header>
      <img className={style.logo} src={picture1} alt="#" />
      <nav className={style.navbar}>
        <Link to={mainPage} className={style.navbar__link}>
          Про нас
        </Link>
        <Link to={mainPage} className={style.navbar__link}>
          Каталог
        </Link>
        <Link to={mainPage} className={style.navbar__link}>
          Технология
        </Link>
        <Link to={mainPage} className={style.navbar__link}>
          Контакты
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
