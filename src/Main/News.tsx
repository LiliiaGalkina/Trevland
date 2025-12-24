import { newsItems } from "./mockdata";
import NewsItem from "./NewsItem";

const News = () => {
    
    return (
      <section className="news">
        <div className="container">
          <h2 className="section-title">From Blog & News</h2>
          <p className="section-text">
            Welcome to Community Conversations, a new interview series featuring
            Intrepid travellers, creatives and activists in our community.
          </p>
          <div className="news__items">
            <div className="news__item-left">
                {newsItems.slice(0,1).map((newsItem) => (
                    <NewsItem key={newsItem.id} {...newsItem}/>
                ))}
                </div>
            <div className="news__item-right">
                {newsItems.slice(1).map((newsItem) => (
                    <NewsItem key={newsItem.id} {...newsItem}/>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default News;