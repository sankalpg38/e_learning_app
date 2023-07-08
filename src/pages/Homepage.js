import React from 'react'
import '../components/style/homepage.css'

function Homepage() {
  return (
    <div className='home'>
      <p className='head'>
        Welcome to <span className='highlight'>SkillUp</span> 
      </p>
        {/* <br/> */}
      <p className='desc'>
        An <span>e-learning</span> platform
      </p>
        <p className='disclaimer'>
        Please login to view your courses.
      </p>
    </div>
  )
}

export default Homepage