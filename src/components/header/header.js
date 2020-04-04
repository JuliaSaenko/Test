import React, { useState } from 'react';
import disableScroll from 'disable-scroll';

import Avatar from './img/avatar.png';

import './header.scss';

export default function Header() {
    const [menuStatus, setMenuStatus] = useState(false);

    const menuClasses = !menuStatus ? `header__nav header__nav--closed` : `header__nav header__nav--opened`;

    if(menuStatus) {
        disableScroll.on();
    } else {
        disableScroll.off();
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <a className='header__logo-link' href='https://ibb.co/k4njN8P'><b className='header__logo-text'>Logo</b></a>
            </div>
            <nav className={menuClasses}>
                <button className="header__nav-toggle" type="button"
                    onClick={()=>setMenuStatus(!menuStatus)}>
                    <span className="visually-hidden">Меню</span>
                </button>
                <ul className='header__nav-list tabs'>
                    <li className='header__nav-item tabs__item'>
                        <a className='header__nav-link' href='https://ibb.co/k4njN8P'>Free test</a>
                    </li>
                    <li className='header__nav-item header__nav-item--active tabs__item tabs__item--active'>
                        <a className='header__nav-link' href='https://ibb.co/k4njN8P'>Catalog</a>
                    </li>
                    <li className='header__nav-item tabs__item'>
                        <a className='header__nav-link' href='https://ibb.co/k4njN8P'>Help</a>
                    </li>
                </ul>
                <ul className='header__user-nav'>
                    <li className='header__user-item'>
                        <span className='header__user'>Michael Browk</span>
                        <div className='header__user-img'>
                            <img className='header__user-avatar' width='24' height='34' src={Avatar} alt='User avatar'/>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}