import Button from "../Button/Button";

const Header = () => {
return (
  <header className="header">
    <div className="container">
      <div className="header__items">
        <a href="#" className="header__logo">
          Trevland
        </a>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Location
              </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Blog
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  About
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Contact
                </a>
              </li>
          </ul>
        </nav>
        <div className="header__button">
        <Button textButton="Booking now" classButton="header__button"/>

        </div>
      </div>
    </div>
  </header>
);
}

export default Header;