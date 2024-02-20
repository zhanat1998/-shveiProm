import { Link } from 'react-router-dom';
import svg from '../../picture/Frame 55.svg';
import './style.scss';

const Header = () => {
  return (
    <header className="headers">
      <div className="container">
        <nav className="header">
          <img src={svg} alt={svg} />
          <div className="header__block">
            <Link className="header__link" to={'/'}>
              Про нас
            </Link>
            <a className="header__link" href={'#Каталог'}>
              Каталог
            </a>
            <a className="header__link" href={'#Технология'}>
              Технология
            </a>
            <a className="header__link" href={'#Контакты'}>
              Контакты
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
