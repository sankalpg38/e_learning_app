import React from 'react'
import '../../components/style/courses.css'
import course1 from './dsa.png'
import course2 from './webd.png'


function Courses() {
  
  return (
    <div className='course-section'>
      <p className='title'>Here are your available courses</p>
      <div className='cards'>
      <div className='course-card'>
        <img src={course1} alt='course1'/>
        <div className='card-content'>
          <h4><b>Data Structures in C++</b></h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque molestias ratione molestiae, illum rerum ullam dicta eveniet sint incidunt vero voluptas quibusdam enim provident alias consectetur, quam ut adipisci ad?</p>
          <div className='progress-bar'>
            <div className='progress dsa'>80%</div>
          </div>
        </div>
      </div>

      <div className='course-card'>
        <img src={course2} alt='course2'/>
        <div className='card-content'>
          <h4><b>Full Stack Web Development</b></h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque molestias ratione molestiae, illum rerum ullam dicta eveniet sint incidunt vero voluptas quibusdam enim provident alias consectetur, quam ut adipisci ad?
          </p>
          <div className='progress-bar'>
            <div className='progress webd'>90%</div>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Courses