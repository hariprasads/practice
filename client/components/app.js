import React, { Component } from 'react'
import Welcome from './welcome'
import NavigationBar from './navigationbar'

class App extends Component {
  render(){
    return (
      <div className = "container">
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}

export default App
