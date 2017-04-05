import React, { Component } from 'react'
import Welcome from './welcome'
import NavigationBar from './navigationbar'
import FlashMessagesList from './flash/flashMessagesList'

class App extends Component {
  render(){
    return (
      <div className = "container">
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    )
  }
}

export default App
