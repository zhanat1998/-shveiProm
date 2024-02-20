import { Fragment } from 'react';
import '../../sass/components/_sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import picture1 from '../../images/picture-1.svg';

const SideBar = ({ isOpen, closedSideBar }) => {
  const mainPage = '/';
  const styles = isOpen ? 'sidebar sidebar--open' : 'sidebar sidebar--closed';
  return (
    <Fragment>
      {isOpen ? <div className="sidebar__backdrop" onClick={closedSideBar}></div> : <Fragment></Fragment>}
      <nav className={`${styles}`}>
        <nav className="sidebar">
          <ul className="sidebar__list">
            <div className="sidebar__logo">
              <img src={picture1} alt="#" onClick={closedSideBar} />
            </div>
            <li className="sidebar__list__item" onClick={closedSideBar}>
              <NavLink className="sidebar__link" to={mainPage}>
                Про нас
              </NavLink>
            </li>
            <li className="sidebar__list__item" onClick={closedSideBar}>
              <NavLink className="sidebar__link" to={mainPage}>
                Каталог
              </NavLink>
            </li>
            <li className="sidebar__list__item" onClick={closedSideBar}>
              <NavLink className="sidebar__link" to={mainPage}>
                Технология
              </NavLink>
            </li>
            <li className="sidebar__list__item" onClick={closedSideBar}>
              <NavLink className="sidebar__link" to={mainPage}>
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
    </Fragment>
  );
};
export default SideBar;
