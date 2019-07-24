import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Eyes from './Screens/Eyes';
import Home from './Screens/Home';
import { LostPath } from './Screens/LostPath';

export const Routes = () => {
  return (
    <Switch>
      <Route
        path="/Eyes"
        component={Eyes}
      />
      <Route
        path="/home"
        component={Home}
      />
      <Route
        exact
        path={["/", "/home"]}
      >
        <Redirect to="/home" />
      </Route>
      {/* <Route path="/" component={Home} /> */}
      <Route component={LostPath} />
    </Switch>
  )
}
