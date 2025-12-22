import { specialOffersItems } from "./mockdata";
import SpecialOffersSliderItem from "./SpecialOffersSliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useResponsiveEvent from "./useResponsiveEvent";

const SpecialOffersSlider = () => {
  const isLaptopScreen = useResponsiveEvent(1380);
  const isTabletBigScreen = useResponsiveEvent(1130);
  const isTabletLittlescreen = useResponsiveEvent(850);
  const isMobileScreen = useResponsiveEvent(570);

  const settings = {
    slidesToShow: isMobileScreen
      ? 1
      : isTabletLittlescreen
      ? 2
      : isTabletBigScreen
      ? 3
      : isLaptopScreen
      ? 4
      : 5,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <section className="special-offers">
      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        <p className="section-text">
          With the New Year comes a refreshing sense of wanderlust, a longing in
          our souls to escape to warmer climates,
        </p>
      </div>
      <div className="special-offers__slider">
        <Slider {...settings}>
          {specialOffersItems.map((specialOffersItem) => (
            <SpecialOffersSliderItem
              key={specialOffersItem.id}
              {...specialOffersItem}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SpecialOffersSlider;
