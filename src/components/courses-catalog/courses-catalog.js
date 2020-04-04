import React from 'react';

import Header from '../header';
import PageHeader from '../page-header';
import CoursesList from '../courses-list/';

export default function CoursesCatalog() {
  return (
      <main>
          <Header/>
          <PageHeader/>
          <CoursesList/>
      </main>
  )
}