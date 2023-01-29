import React from 'react'
import Button from '../Button/Button'

export default function About() {
  return (
    <>
    <div className="container mb-5 p-5">
        <div className="row">
            <div className="col-md-4 display-2 fw-bolder">
                About Me
            </div>
            <div className="col-md-8">
                <p className=''>Welcome to my profile, I graduated from the faculty of Computers and Information in 2022, Bioinformatics
                department. and is keen on learning new things specially related to data analysis and data science.
                I have skills in software, data management systems, databases, statistics and Python, Libraries such as
                (Numpy, Pandas, Matplotlib), Excel, SQL, and Power BI.</p>
                <div className="btnCv d-flex justify-content-center">
                <Button action="Download CV" click="../cv/CV.pdf"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
