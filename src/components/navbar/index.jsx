import '../../sass/components/_navbar.scss';
import { Link } from 'react-router-dom';
import picture1 from '../../images/picture-1.svg';
import { useState } from 'react';
const mainPage = '/';
const Navbar = ({ toggleSideBar }) => {
  return (
    <header className="header">
      <img className="logo" src={picture1} alt="#" />
      <nav className="navbar">
        <Link to={mainPage} className="navbar__link">
          Про нас
        </Link>
        <Link to={mainPage} className="navbar__link">
          Каталог
        </Link>
        <Link to={mainPage} className="navbar__link">
          Технология
        </Link>
        <Link to={mainPage} className="navbar__link">
          Контакты
        </Link>
        <div className="navbar__button" onClick={toggleSideBar}>
          <div className="navbar__button__component"></div>
          <div className="navbar__button__component"></div>
          <div className="navbar__button__component"></div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
