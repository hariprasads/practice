import React, { Component } from 'react'
import timezones from '../../data/timezone'
import map from 'lodash/map'

class SignupForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: "",
      email:"",
      password: "",
      passwordconfirmation:"",
      timezone: ""
    }
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault()
    console.log(this.state);
  }

  render(){

    const options = map(timezones, function(val,key){
      return (<option key ={key} value = {val} > {key} </option>)
      }
    );

    return(
      <form onSubmit = {this.onSubmit.bind(this)}>
        <h2> Join us before its too late!</h2>

        <div className = "form-group">
          <label className = "control-label">  Username </label>
          <input type = "text"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.username}
                 name = "username"
                 className = "form-control"
          />
        </div>

        <div className = "form-group">
          <label className = "control-label">  Email </label>
          <input type = "email"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.email}
                 name = "email"
                 className = "form-control"
          />
        </div>

        <div className = "form-group">
          <label className = "control-label">  Password </label>
          <input type = "password"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.password}
                 name = "password"
                 className = "form-control"
          />
        </div>

        <div className = "form-group">
          <label className = "control-label">  Password Confirmation</label>
          <input type = "password"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.passwordconfirmation}
                 name = "passwordconfirmation"
                 className = "form-control"
          />
        </div>

        <div className = "form-group">
          <label className = "control-label">  TimeZone</label>
          <select className = "form-control"
                  name = "timezone"
                  onChange = {this.onChange.bind(this)}
                  value = {this.state.timezone}
          >
            <option value="" disabled > Choose your Timezone </option>
            {options}
          </select>
        </div>

        <div className = "form-group">
          <button className="btn btn-primary btn-lg">Signup</button>
        </div>
      </form>
    )
  }
}

export default SignupForm
