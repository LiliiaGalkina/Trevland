import type React from "react";

interface SpecialItemProps {
  imgurl: string;
  imgalt: string;
  title: string;
  country: string;
  rating: number;
  duration: string;
  price: string;
}

const SpecialOffersSliderItem: React.FC<SpecialItemProps> = ({
  imgurl,
  imgalt,
  title,
  country,
  rating,
  duration,
  price,
}) => {
  return (
    <div className="special-offers__item card-special">
      <div className="card-special__img">
        <img src={imgurl} alt={imgalt} />
      </div>
      <div className="card-special__content">
        <h3 className="card-special__title">{title}</h3>
        <div className="card-special__info">
          <div className="card-special__country">
            <img src="/image/slider/red.svg" alt="красная капля" />
            <p className="card-special__country-name">{country}</p>
          </div>
          <div className="card-special__rating">
            <img src="/image/slider/star.svg" alt="золотая звездочка" />
					  <p className="card-special__rating-digits">{rating}</p>
          </div>
        </div>
			  <p className="card-special__duration">{duration}</p>
        <div className="card-special__price">{price}
          <span>/person</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersSliderItem;
