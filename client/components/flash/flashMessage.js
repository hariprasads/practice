import React, { Component } from 'react'
import classNames from 'classnames'

class FlashMessage extends Component{

  onClick(){
    this.props.deleteFlashMessages(this.props.message.id);
  }

  render(){
    const { id, type, text} = this.props.message;
    return (
      <div className= {classNames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        <button onClick = {this.onClick.bind(this)} className="close"><span> &times; </span></button>
        {text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessages: React.PropTypes.func.isRequired
}

export default FlashMessage
