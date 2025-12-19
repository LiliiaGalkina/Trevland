import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__fon">
        <div className="hero__fon-img">
          <img
            src="/image/hero-fon.png"
            alt="мужчина смотрит через фотоаппарат на темно-синее небо"
          />
        </div>
        <div className="hero__fon-dark">
        <img
          src="/image/hero.png"
          alt="темно-серый прямоугольник для затемнения картинки"
        />
        </div>
      </div>
      <div className="container">
        <div className="hero__title-block">
          <h1 className="hero__title">
            Railtrips To Here, <br/> There And Everywhere!
          </h1>
          <p className="hero__text">
            We all wish to start our year the best way possible and also
            according to a common belief if you have a great start to your.
          </p>
          <Button textButton="Explore more" classButton="hero__button" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
