import React from 'react';
import {Link} from "react-router-dom";

import './intro.scss';

export default function Intro () {
  return (
      <div className='intro'>
          <Link className='btn intro__btn' to={`/authorization`}>View authorization page</Link>
          <Link className='btn intro__btn' to={`/courses`}>View courses page</Link>
      </div>
  );
}