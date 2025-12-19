import type React from "react";

interface PopularItemProps {
	imgurl: string;
	imgalt: string;
	title: string;
	text: string
}

const PopularLocationItem:React.FC<PopularItemProps> = ({ imgurl, imgalt, title, text }) => {
  return (
    <div className="location-cart">
      <div className="location-cart__img">
        <img src={imgurl} alt={imgalt} />
      </div>
      <div className="location-cart__info">
			  <h3 className="location-cart__title">{title}</h3>
			  <p className="location-cart__text">{text }</p>
      </div>
    </div>
  );
};

export default PopularLocationItem;
