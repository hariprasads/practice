import React, { Component } from 'react'
import timezones from '../../data/timezone'
import map from 'lodash/map'
import classNames from 'classnames'

class SignupForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: "",
      email:"",
      password: "",
      passwordconfirmation:"",
      timezone: "",
      errors: {},
      isLoading: false
    }
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault()
    this.setState({
      errors: {},
      isLoading: true
    })
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({data}) => this.setState({errors: data, isLoading: false})
    );
  }

  render(){

    const { errors } = this.state;

    const options = map(timezones, function(val,key){
      return (<option key ={key} value = {val} > {key} </option>)
      }
    );

    return(
      <form onSubmit = {this.onSubmit.bind(this)}>
        <h2> Join us before its too late!</h2>

        <div className = {classNames("form-group", {"has-error": errors.username } ) }>
          <label className = "control-label">  Username </label>
          <input type = "text"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.username}
                 name = "username"
                 className = "form-control"
          />
          {errors.username && <span className="help-block"> {errors.username }</span>}
        </div>

        <div className = {classNames("form-group", {"has-error": errors.email } ) }>
          <label className = "control-label">  Email </label>
          <input type = "email"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.email}
                 name = "email"
                 className = "form-control"
          />
          {errors.email && <span className="help-block"> {errors.email }</span>}
        </div>

        <div className = {classNames("form-group", {"has-error": errors.password } ) }>
          <label className = "control-label">  Password </label>
          <input type = "password"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.password}
                 name = "password"
                 className = "form-control"
          />
          {errors.password && <span className="help-block"> {errors.password }</span>}
        </div>

        <div className = {classNames("form-group", {"has-error": errors.passwordconfirmation } ) }>
          <label className = "control-label">  Password Confirmation</label>
          <input type = "password"
                 onChange = {this.onChange.bind(this)}
                 value = {this.state.passwordconfirmation}
                 name = "passwordconfirmation"
                 className = "form-control"
          />
          {errors.passwordconfirmation && <span className="help-block"> {errors.passwordconfirmation }</span>}
        </div>

        <div className = {classNames("form-group", {"has-error": errors.timezone } ) }>
          <label className = "control-label">  TimeZone</label>
          <select className = "form-control"
                  name = "timezone"
                  onChange = {this.onChange.bind(this)}
                  value = {this.state.timezone}
          >
            <option value="" disabled > Choose your Timezone </option>
            {options}
          </select>
          {errors.timezone && <span className="help-block"> {errors.timezone}</span>}
        </div>

        <div className = "form-group">
          <button disabled = {this.state.isLoading} className="btn btn-primary btn-lg">Signup</button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm
