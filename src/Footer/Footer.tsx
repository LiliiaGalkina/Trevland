import { useState } from "react";
import Button from "../Button/Button";

const Footer = () => {
    const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__items">
          <div className="footer__info info-footer">
            <a href="#" className="info-footer__logo">
              Trevland
            </a>
            <div className="info-footer__link">
              <span>Contact us</span>
              <a href="#">@shovasatkhira88.com</a>
            </div>
            <div className="info-footer__social social-footer">
              <a href="#" className="social-footer__item" target="blank">
                <img src="/image/social/fb.svg" alt="facebook" />
              </a>
              <a href="#" className="social-footer__item" target="blank">
                <img src="/image/social/insta.svg" alt="instagram" />
              </a>
              <a href="#" className="social-footer__item" target="blank">
                <img src="/image/social/twitter.svg" alt="twitter" />
              </a>
              <a href="#" className="social-footer__item" target="blank">
                <img src="/image/social/google.svg" alt="google" />
              </a>
            </div>
          </div>
          <nav className="footer__menu menu-footer">
            <ul className="menu-footer__list">
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Services
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  About
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Our story
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Branding
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Benefits
                </a>
              </li>
            </ul>
            <ul className="menu-footer__list">
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Legal
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Terms & Conditions
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Privecy Policy
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Terms of use
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__form form-footer">
            <h3 className="form-footer__title">SUBSCRIBE NOW</h3>
            <form action="#" className="form-footer__block">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value
                    
                )}
                className="form-footer__input"
                required
                placeholder="Email"
              />
              <Button textButton="Send" classButton="form-footer__button" />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
