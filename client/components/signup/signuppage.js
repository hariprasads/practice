import React, { Component } from 'react'
import SignupForm from './signupform'

class SignupPage extends Component {
  render(){
    return(
    <div className = "row">
      <div className="col-md-4 col-md-offset-4">
        <SignupForm />
      </div>
    </div>
   )
  }
}

export default SignupPage
