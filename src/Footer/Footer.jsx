import React, { Component } from 'react'
import Button from '../Button/Button'

export default class Footer extends Component {
  render() {
    return (
      <>
     <div >
        <div className="fluid-container bg-dark text-white p-5 text-center">
            <div className="row">
                <di className="col-md-4">
                    <h1 className='mb-4'>GET IN TOUCH</h1>
                    <div className="info">
                    <i className="fa fa-envelope"></i> <span>Youssef@gmail.com</span><br />
                    <i className="fa fa-phone"></i> <span>11122233344</span>
                    </div>
                </di>
                <di className="col-md-4 ">
                    <Button action="Contact Me"/>
                </di>
                <di className="col-md-4 mt-4">
                <i class="fa fa-facebook fs-3x me-3"></i>
                <i class="fa fa-linkedin fs-2x me-3"></i>
                <i class="fa fa-twitter fs-2x"></i>
                    <p>Copywrite@1999 kr</p>
                </di>
            </div>
        </div>
        </div> 
      </>
    )
  }
}
