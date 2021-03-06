import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import { play, exit } from './timelines'
import Home from './pages/Home/Home'
import WebSites from './pages/WebSites/WebSites'
import NotFound from './pages/NotFound/NotFound'

import './App.scss'

function App() {
  return (
    <Route render={({location}) => {
      const { pathname, key } = location;

      return (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/websites">Web Sites</Link>
            <Link to="/error">Error</Link>
          </nav>
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node, appears) => exit(node, appears)}
              timeout={{enter: 750, exit: 750}}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/websites" component={WebSites} />
                <Route component={NotFound} />
              </Switch>
            </Transition>
          </TransitionGroup>
        </>
      )
    }} />
  );
}

export default App;