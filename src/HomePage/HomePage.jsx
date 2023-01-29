
import React, { Component } from 'react'
import Button from '../Button/Button';
import image from './Image/back.jpg' 

import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <>
      
<section className='home mb-5 overflow-hidden"'>
    <div className="fluid-container">
        <div className="row">
            
            <div className="item">
            <h1 className='text-white  mb-3'>Youssef Alaa</h1>
            <h2 className='text-white mb-3'>Software Developer</h2>
           
            <Button action="Contact Me"/>
            </div>
         
            
<div className="image">
<img  src={image} alt="My Photo"/>


            </div>
        </div>
    </div>
</section>

      </>
    )
  }
}
