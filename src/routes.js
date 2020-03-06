import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './pages/App'
import UserProfile from './pages/UserProfile'
import Checkout from './pages/Checkout'

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
)

export default MainRoutes