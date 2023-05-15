import React from 'react';
import './news-element.css';
import { INewsElement } from '../../models';

interface props {
  article: INewsElement;
}

export const NewsElement: React.FC<props> = ({ article }) => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="article-card">
      <div className="article-card__picture">
        <img src={article.urlToImage} />
      </div>
      <div className="article-card__main-info">
        <div
          className="main-info_title"
          onClick={() => openInNewTab(article.url)}
        >
          {article.title}
        </div>
        <div className="main-info__desc">{article.description}</div>
      </div>
    </div>
  );
};
