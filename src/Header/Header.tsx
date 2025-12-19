import { useState } from "react";
import Button from "../Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <a href="#" className="header__logo">
            Trevland
          </a>
          <nav className="header__menu menu">
            <div
              className="menu__burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </div>
            <ul
              id="menu"
              className={isMenuOpen ? "menu__list_active" : "menu__list"}
            >
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
              <div
                className= "menu__burger_active"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span></span><span></span>
              </div>
            </ul>
          </nav>
          <Button textButton="Booking now" classButton="header__button" />
        </div>
      </div>
    </header>
  );
};

export default Header;
