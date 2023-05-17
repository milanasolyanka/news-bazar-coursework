import React from 'react';
import './news-list.css';
import { INewsList } from '../../models';
import { NewsElement } from '../NewsElement';

export const NewsList: React.FC<INewsList> = ({
  status,
  totalResults,
  articles,
}) => {
  return (
    <div className="newsList-container">
      {status === 'ok' ? (
        <div>
          {articles.map((article) => (
            <NewsElement article={article} />
          ))}
        </div>
      ) : (
        <div>При получении новостей произошла ошибка.</div>
      )}
    </div>
  );
};
//<h1>Было найдено: {totalResults}</h1>
