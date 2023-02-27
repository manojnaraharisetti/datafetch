import React, { Component } from 'react'

export default class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Manu"
      }
    }
    
  render() {
    return (
      <div>
        <h1>Hai My Name is : {this.state.name}</h1>
      </div>
    )
  }
}
