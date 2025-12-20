import { popularItems } from "./mockdata";
import PopularLocationItem from "./PopularLocationItem";

const PopularLocation = () => {
  return (
    <section className="popular-location">
      <div className="container">
        <h2 className="section-title">Popular Location</h2>
        <p className="section-text">
          For every one of us, travel came first. We’ve spent years living as
          nomads, pioneers, and voyagers— from island hopping in the
        </p>
        <div className="popular-location__items">
          {popularItems.map((popularItem) => (
            <PopularLocationItem key={popularItem.id} {...popularItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocation;
