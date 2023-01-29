import React from 'react'
import Card from './Card'

export default function Project() {
  return (
    <>
    <h1 className='m-3'>Portfolio</h1>
    <div className="container ">
        <div className="row">
        
        
            <Card title="Full Stack Developer" color="1"/>
            <Card title="Web Developer"/>
            <Card title="Python Developer" color="1"/>
            
            <Card title="React Developer"/>
            <Card title="Back End Developer" color="1"/>
            <Card title="Front End Developer"/>
            
        </div>
        
    </div>
    </>
  )
}
