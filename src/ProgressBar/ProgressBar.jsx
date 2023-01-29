import React, { Component } from 'react'




export default class ProgressBar extends Component {
  render() {
    return (
      <>
     
     <div className="progress mt-3">
                <div className="progress-bar bg-dark"   role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{this.props.lang}</div>
                </div>
    </>
    )
  }
}
