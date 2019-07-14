import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import WebSites from './pages/WebSites/WebSites'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/websites" component={WebSites} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;