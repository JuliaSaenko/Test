import React, {useState} from 'react';

import AuthorizationForm from "../authorization-form";
import RegistrationForm from "../registration-form";

import { IconVk, IconFb, IconGoogle } from './img/index';

import './authorization.scss';

export default function Authorization()  {
    const [formType, setFormType] = useState('registration');

    if(formType === 'authorization') {
        return (
            <div className='authorization-main'>
                <div className='authorization'>
                    <div className="authorization__header">
                        <h1 className='authorization__title title'>Profile</h1>
                        <div className="authorization__tabs tabs">
                            <button
                                className='tabs__item'
                                type="button"
                                onClick={()=>setFormType('registration')}>
                                Registration</button>
                            <button
                                className='tabs__item tabs__item--active'
                                type="button"
                                onClick={()=>setFormType('authorization')}>
                                Sing in</button>
                        </div>
                        <div className='authorization__social'>
                            <p className='authorization__text'>You can sign in with social</p>
                            <ul className='authorization__social-list'>
                                <li className='authorization__social-item'>
                                    <a href='vk.com'><IconVk/></a>
                                </li>
                                <li className='authorization__social-item authorization__social-item--fb'>
                                    <a href='facebook.com'><IconFb/></a>
                                </li>
                                <li className='authorization__social-item authorization__social-item--google'>
                                    <a href='google.com'><IconGoogle/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   <AuthorizationForm setFormType={setFormType}/>
                </div>
            </div>
        )
    }

    return (
        <div className='authorization-main'>
            <div className='authorization'>
                <div className="authorization__header">
                    <h1 className='authorization__title title'>Profile</h1>
                    <div className="authorization__tabs tabs">
                        <button
                            className='tabs__item tabs__item--active'
                            type="button"
                            onClick={()=>setFormType('registration')}>
                            Registration</button>
                        <button
                            className='tabs__item'
                            type="button"
                            onClick={()=>setFormType('authorization')}>
                            Sing in</button>
                    </div>
                    <div className='authorization__social'>
                        <p className='authorization__text'>You can sign in with social</p>
                        <ul className='authorization__social-list'>
                            <li className='authorization__social-item'>
                                <a href='vk.com'><IconVk/></a>
                            </li>
                            <li className='authorization__social-item authorization__social-item--fb'>
                                <a href='facebook.com'><IconFb/></a>
                            </li>
                            <li className='authorization__social-item authorization__social-item--google'>
                                <a href='google.com'><IconGoogle/></a>
                            </li>
                        </ul>
                    </div>
                </div>

                 <RegistrationForm setFormType={setFormType}/>
            </div>
        </div>

    )
}