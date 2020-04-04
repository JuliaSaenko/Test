import React from 'react';

import CoursesItem from '../courses-item';

import './courses-list.scss';

export default function CoursesList() {
    const items = [
        {
            id: 1,
            title: 'Take exam in Mathematics at 100 points',
            author: {
                name: 'Alexa',
                img: 'img/ava-1.png',
                img2x: 'img/ava-1@2x.png',
            },
            img: 'img/course-1.jpg',
            img2x: 'img/course-1@2x.jpg',
            imgAlt: 'It`s an alt of course',
            about: {
                progress: 12,
                lessons: 12,
                tasks: 12,
                duration: 30,
            },
        },
        {
            id: 2,
            title: 'How buy new clothes without money in USA',
            author: {
                name: 'Kathryn Nguyen',
                img: 'img/ava-2.png',
                img2x: 'img/ava-2@2x.png',
            },
            img: 'img/course-2.jpg',
            img2x: 'img/course-2@2x.jpg',
            imgAlt: 'It`s an alt of course',
            about: {
                progress: 12,
                lessons: 12,
                tasks: 12,
                duration: 30,
            },
        },
        {
            id: 3,
            title: 'Why people hate me?',
            author: {
                name: 'Diane Miles',
                img: 'img/ava-3.png',
                img2x: 'img/ava-3@2x.png',
            },
            img: 'img/course-3.jpg',
            img2x: 'img/course-3@2x.jpg',
            imgAlt: 'It`s an alt of course',
            about: {
                progress: 12,
                lessons: 12,
                tasks: 12,
                duration: 30,
            },
        },
    ];

    return (
        <section>
            <h2 className='visually-hidden'>Your courses</h2>
            <ul className='courses-list'>
                {items.map(item=> <CoursesItem key={item.id} course={item}/>)}
            </ul>

        </section>
    )

}