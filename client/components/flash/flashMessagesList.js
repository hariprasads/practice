import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlashMessage from './flashMessage'
import {deleteFlashMessages} from '../../actions/flashMessages'

class FlashMessagesList extends Component{
  render(){
    const messages = this.props.messages.map(message =>
      <FlashMessage key = {message.id} message = {message} deleteFlashMessages = {this.props.deleteFlashMessages} />
    )

    return(
      <div>
        {messages}
      </div>
    )
  }
}

FlashMessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteFlashMessages: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    messages: state.flashMessages
  }
}
export default connect(mapStateToProps, { deleteFlashMessages })(FlashMessagesList)
