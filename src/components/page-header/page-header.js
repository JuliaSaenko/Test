import React from 'react';

import SelectCountry from '../select-country';
import './page-header.scss';

export default function PageHeader() {


    return (
        <section className='page-header'>
            <h1 className='page-header__title'>Course catalog</h1>
            <p className='page-header__description'>Each course contains video lectures, tasks, and text materials. All courses viewed by you are displayed in your personal account</p>
            <div className='page-header__bottom'>
               <p className='page-header__search-wrapper'>
                   <input
                       className='page-header__search input'
                       type='search'
                       placeholder='Search'/>
               </p>
                <div className='page-header__select'>
                    <p className='page-header__select-text'>Your country</p>
                    <SelectCountry/>
                </div>
            </div>
        </section>
    )
}