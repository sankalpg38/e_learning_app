import React from 'react'
import '../components/style/about.css'
function About() {
  return (
    <div className='about-section'>
      <p className='about-desc'>This is a demo of an e-learning website where users can see their undertaken courses after logging in.</p>
      <br/>
      <p className='query'>For any queries feel free to contact: </p>
      {/* <p className='query'>contact: 8864826974</p> */}
      <p className='query'>sankalpg38@gmail.com</p>
      <p className='footer'>Made by Sankalp Garg</p>
    </div>
  )
}

export default About