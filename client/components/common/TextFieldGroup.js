import React, { Component } from 'react'
import classNames from 'classnames'

class TextFieldGroup extends Component{
  render(){
    return (
      <div className = {classNames("form-group", {"has-error": this.props.error } ) }>
        <label className = "control-label"> {this.props.label} </label>
        <input type = {this.props.type}
               onChange = {this.props.onChange}
               value = {this.props.value}
               name = {this.props.field}
               className = "form-control"
        />
        {this.props.error && <span className="help-block"> {this.props.error }</span>}
      </div>
    )
  }
}


TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
