import React from 'react';
import './header.css';
import { IHeader } from '../../models';
import avatar from '../../assets/avatar.jpg';
import { ReactComponent as Logo } from '../../assets/search_icon.svg';
import { HeaderButton } from '../UI/HeaderButton';

export const Header: React.FC<IHeader> = ({}) => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="contentTop">
          <div className="contentTop__title">NewsBazar</div>
          <div className="contentTop__search">
            <Logo />
            <input
              className="search__input"
              type="text"
              placeholder="Ключевые слова..."
            />
          </div>
          <img className="avatar__img" src={avatar} alt="avatar" />
        </div>
        <div className="contentBottom">
          <div className="contentBottom__left">
            <HeaderButton value="Главная" />
            <HeaderButton value="По категориям" />
            <HeaderButton value="Закладки" />
          </div>
          <div className="contentBottom__right">
            <HeaderButton value="В мире" />
            <HeaderButton value="Политика" />
            <HeaderButton value="Наука" />
            <HeaderButton value="Спорт" />
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="v31_7" onClick={refreshPage}>
  <div className="v30_17"></div>
  <span className="v30_19">Главная</span>
</div>; */
}
