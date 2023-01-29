import React, { Component } from 'react'

export default class Button extends Component {
   
  
render() {
    return (
      <a className='btn btn-outline-secondary mt-5' href={this.props.click} download>{this.props.action}</a>
    )
  }
}
