import { specialOffersItems } from "./mockdata";
import SpecialOffersSliderItem from "./SpecialOffersSliderItem";

const SpecialOffersSlider = () => {
	return (
    <section className="special-offers">
      <h2 className="section-title">Special Offers</h2>
      <p className="section-text">
        With the New Year comes a refreshing sense of wanderlust, a longing in
        our souls to escape to warmer climates,
      </p>
			<div className="special-offers__slider">
				{specialOffersItems.map((specialOffersItem) => (
					<SpecialOffersSliderItem key={specialOffersItem.id} {...specialOffersItem} />
				))}
	  </div>
    </section>
  );
}

export default SpecialOffersSlider;