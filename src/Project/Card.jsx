import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <>
      <div className="card shadow p-3 m-5 bg-dark rounded  text-white" style={{width: "18rem"}}> 
            <div className="card-body p-4">
                <h5 className="card-title bolder">{this.props.title}</h5>
                <hr/>
            </div>
            </div>
      </>
    )
  }
}
