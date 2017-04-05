import React, { Component } from 'react'
import timezones from '../../data/timezone'
import map from 'lodash/map'
import classNames from 'classnames'
import validateInput from '../../../server/shared/validations/signup'
import TextFieldGroup from '../common/TextFieldGroup'

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

  isValid(){

      const { errors, isValid } = validateInput(this.state);
      if(!isValid){
        this.setState({
          errors
        })
      }
      return isValid;
  }

  onSubmit(e){
    e.preventDefault()

    if(this.isValid()){
      this.setState({
        errors: {},
        isLoading: true
      })
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: "success",
            text: "You have signedup successfully"
          });
          this.context.router.push('/');
        },
        ({data}) => this.setState({errors: data, isLoading: false})
      );
    }

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

        <TextFieldGroup
          error = {errors.username}
          label = "Username"
          onChange = {this.onChange.bind(this)}
          value = {this.state.username}
          field = "username"
        />

        <TextFieldGroup
          error = {errors.email}
          label = "Email"
          onChange = {this.onChange.bind(this)}
          value = {this.state.email}
          field = "email"
        />
        <TextFieldGroup
          error = {errors.password}
          label = "Password"
          onChange = {this.onChange.bind(this)}
          value = {this.state.password}
          field = "password"
          type = "password"
        />
        <TextFieldGroup
          error = {errors.passwordconfirmation}
          label = "Password Confirmation"
          onChange = {this.onChange.bind(this)}
          value = {this.state.passwordconfirmation}
          field = "passwordconfirmation"
          type = "password"
        />
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
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm
