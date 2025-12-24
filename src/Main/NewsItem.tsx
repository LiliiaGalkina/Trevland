import type React from "react";

interface NewsItemProps {
    imgurl: string;
    imgalt: string;
    title: string;
    text: string;
    link: string
}

const NewsItem:React.FC<NewsItemProps> = ({imgurl, imgalt, title, text, link}) => {
    return (
      <div className="card-news">
        <div className="card-news__img">
          <img src={imgurl} alt={imgalt} />
        </div>
        <div className="card-news__info">
          <h3 className="card-news__title">{title}</h3>
          <p className="card-news__text">{text}</p>
          <a href="#" className="card-news__link">
            {link}
          </a>
        </div>
      </div>
    );
}

export default NewsItem;