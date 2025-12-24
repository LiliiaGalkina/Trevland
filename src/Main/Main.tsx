import Hero from "./Hero";
import PopularLocation from "./PopularLocation";
import SpecialOffersSlider from "./SpecialOffersSlider";
import News from "./News";

const Main = () => {
    return (
        <main className="main">
			<Hero />
			<PopularLocation />
			<SpecialOffersSlider/>
            <News/>
        </main>
    )
}

export default Main;