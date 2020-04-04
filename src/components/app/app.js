import React from 'react';

import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

import { animated, useTransition } from 'react-spring';
import { useRouter } from '../hooks';
import Intro from '../intro';
import NotFoundPage from '../404';
import Authorization from '../authorization';
import CoursesCatalog from '../courses-catalog';
import './app.scss';

const Main = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    }
  });

  return transitions.map(({ item, props: transition, key }) => (
      <animated.div key={key} style={transition} className="contaier">
        <Switch location={item}>
          <Route path='/' exact>
            <Intro />
          </Route>
          <Route path='/authorization' exact>
            <Authorization />
          </Route>
          <Route path='/courses' exact>
            <CoursesCatalog />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </animated.div>
  ))
};

export default function App() {
  return (
      <main>
        <Router>
          <Main />
        </Router>
      </main>
  )
}

