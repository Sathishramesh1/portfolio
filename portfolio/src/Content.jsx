import React from 'react'
import './App.css'
import html from './assets/html5.png'
import css from './assets/css.png'
import js from './assets/js.png'
import bootstrap from './assets/bootstrap.png'
import Reac from './assets/react.svg'
import redux from './assets/redux.png'
import mysql from './assets/MySQL.png'
import Mongo from './assets/mongodb.png'
import node from './assets/node-js.png'
import express from './assets/express-js.avif'
import Git from './assets/Git.png'



function Content() {
  return (
   <>
   <div className='skill-div' id='skills'>
    <h3>skills</h3>
    <div className='skill-list'>
      <div>
        <img src={html}/>
      </div>
      <div>
        <img src={css}/>
      </div>
      <div>
      <img src={js}/>
      </div>
      <div>
      <img src={bootstrap}/>
      </div>
      <div>
      <img src={Reac}/>
      </div>
      <div>
      <img src={redux}/>
      </div>
      <div>
      <img src={mysql}/>
      </div>
      <div>
      <img src={Mongo}/>
      </div>
      <div>
      <img src={node}/>
      </div>
      <div>
      <img src={express}/>
      </div>
      <div>
      <img src={Git}/>
      </div>

    </div>
   
   
   </div>
   
   
   
   </>
  )
}

export default Content