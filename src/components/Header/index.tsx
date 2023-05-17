import React from 'react';
import './css/main.css';
import { IHeader } from '../../models';

export const Header: React.FC<IHeader> = ({}) => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="v30_256">
      <div className="v30_4"></div>
      <div className="v30_5"></div>
      <div className="v33_7">
        <div className="v30_6"></div>
        <div className="name"></div>
        <div className="search_alt"></div>
        <span className="v30_7">Поиск тем, мест и источников</span>
      </div>

      <div className="v32_257" onClick={refreshPage}>
        News<span>Bazar</span>
      </div>
      <div className="v30_9">
        <div className="line"></div>
        <div className="name"></div>
        <div className="v31_2">
          <div className="v30_16"></div>
          <span className="v30_24">Спорт</span>
        </div>
        <div className="v31_3">
          <div className="v30_15"></div>
          <span className="v30_23">Наука</span>
        </div>
        <div className="v31_4">
          <div className="v30_14"></div>
          <span className="v30_22">Политика</span>
        </div>
        <div className="v31_5">
          <div className="v30_13"></div>
          <span className="v30_21">В мире</span>
        </div>
        <div className="v31_8">
          <div className="v30_11"></div>
          <span className="v30_12">Закладки</span>
        </div>
        <div className="v31_6">
          <div className="v30_10"></div>
          <span className="v30_20">По категориям</span>
        </div>
        <div className="v31_7" onClick={refreshPage}>
          <div className="v30_17"></div>
          <span className="v30_19">Главная</span>
        </div>
      </div>
    </div>
  );
};
