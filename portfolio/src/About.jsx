import React from 'react'
import './App.css'
import Contact from './Contact'

function About() {
  return (
    <>
    <div className='about' id='about'>
        <h3>About Me</h3>
        <div className='about-me'>
       <p>
       Hello! My name is Sathish. I hold a Bachelor's degree in Mechanical Engineering and I'm currently expanding my skill set by learning Full Stack Development from Guvi IIT Madras. 

       </p>
       <p>
       I have hands-on experience as a Full Stack Developer, where I've had the opportunity to work on various projects that allowed me to apply and enhance my coding skills. My mechanical engineering background gives me a unique perspective in problem-solving and attention to detail, which I apply in coding scenarios.

       </p>
       <p>
       I'm looking forward to joining a team where I can contribute my skills as a developer and continue to learn and grow in this field. I believe in the power of technology to solve problems and make our lives better, and I'm excited to be part of that process.
       </p>
      
        

       </div>
       <div className='download'>
        <a href='https://drive.google.com/file/d/1r-HjaIGlJ_2XEXkxqi0BlT2mU-AbI7Df/view?usp=sharing' target='new'>
        <button > Resume
            </button></a>
            </div>



    </div>
    <div>
        <Contact/>
    </div>

    </>
  )
}

export default About