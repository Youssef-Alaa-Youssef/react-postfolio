import React from 'react'
import About from '../ABout/About'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'

export default function Portfolio() {
  return (
    <>
    <div className='overflow-hidden'>
    <HomePage/>
    <About/>
    <Skills/>
    <Project/>
    <Footer/>
    </div>
    </>
  )
}
