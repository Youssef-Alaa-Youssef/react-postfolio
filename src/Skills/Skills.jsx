import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Skills() {
  return (
    <>
    <div className="fluid-container bg-black p-5">
        <div className="row">
        <h1 className='text-center text-white'>Skills</h1>
        <p className='p-5 text-white'>Welcome to my profile, I graduated from the faculty of Computers and Information in 2022, Bioinformatics
                department. and is keen on learning new things specially related to data analysis and data science.
                I have skills in software, data management systems, databases, statistics and Python, Libraries such as
                (Numpy, Pandas, Matplotlib), Excel, SQL, and Power BI.</p>

               
               <div className="col-2 offset "></div>
                <div className="col-md-4">
                    <h2 className='text-white'>My Skills</h2>
                    <hr />
                    <div class="list-group">
  <a href="#" class="list-group-item">HTML</a>
  <a href="#" class="list-group-item">CSS</a>
  <a href="#" class="list-group-item">js</a>

  <a href="#" class="list-group-item">ReactJS</a>

  <a href="#" class="list-group-item">Bootstrap</a>
  <a href="#" class="list-group-item">Version Control</a>

<a href="#" class="list-group-item">Jquery</a>
</div>
                </div>
                <div className="col-md-6 pt-5">
                
               
                <ProgressBar lang="HTML"/>
                <ProgressBar lang="JAVASCRIPT"/>
                <ProgressBar lang="BOOTSTRAP"/>
                <ProgressBar lang="REACTJS"/>
                <ProgressBar lang="JQUERY"/>
                <ProgressBar lang="PYTHON"/>
                <ProgressBar lang="DJANGO"/>
                <ProgressBar lang="ODOO"/>
                <ProgressBar lang="FLASK"/>
                <ProgressBar lang="FASTAPI"/>
               

                </div>

        </div>
    </div>

    
    </>
  )
}
