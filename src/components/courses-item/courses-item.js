import React from 'react';

import { IconHat, IconPen, IconPlay } from './img';

import './courses-item.scss';

export default function CoursesItem({course}) {
  const courseProgress = `${course.about.progress}%`;

  return (
      <li className='courses-item'>
          <article className='courses-item__article'>
            <div className='courses-item__heading'>
                <div className='courses-item__img-wrapper'>
                    <img className='courses-item__img' src={course.img} srcSet={course.img2x} width='400' height='134' alt={course.imgAlt}/>
                </div>
                <div className='courses-item__head-info'>
                    <div className='courses-item__progress'>
                        <p className='courses-item__progress-text'>Progress{course.about.progress} %</p>
                        <div className='courses-item__progress-line' style={{width: courseProgress}}></div>
                    </div>
                    <div className='courses-item__author'>
                        <img src={course.author.img} srcSet={course.author.img2x} width='56' height='56' alt='Course author avatar'/>
                        <b className='courses-item__author-name'>{course.author.name}</b>
                    </div>
                </div>
                <div className='courses-item__info'>
                    <h2 className='courses-item__title'><a className='courses-item__link' href='https://ibb.co/k4njN8P'>{course.title}</a></h2>
                    <ul className='courses-item__numbers'>
                        <li className='courses-item__number'>
                            <IconHat/>
                            <span className='courses-item__number-text'>{course.about.lessons} lessons</span>
                        </li>
                        <li className='courses-item__number'>
                            <IconPen />
                            <span className='courses-item__number-text courses-item__number-text--tasks'>{course.about.tasks} tasks</span>
                        </li>
                        <li className='courses-item__number'>
                            <IconPlay/>
                            <span className='courses-item__number-text'>{course.about.duration} minutes</span>
                        </li>
                    </ul>
                    <div className='courses-item__controls'>
                        <button className='courses-item__continue btn btn--bordered' type='button'>Continue</button>
                        <a className='courses-item__more btn btn--colored' href='https://ibb.co/k4njN8P'>More</a>
                    </div>
                </div>
            </div>
          </article>
      </li>
  )
}