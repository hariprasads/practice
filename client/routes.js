import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Welcome from './components/welcome'
import SignupPage from './components/signup/signuppage'

export default (
  <Route path ="/" component = {App} >
    <IndexRoute component={Welcome}/>
    <Route path = "signup" component={SignupPage} />
  </Route>
)
