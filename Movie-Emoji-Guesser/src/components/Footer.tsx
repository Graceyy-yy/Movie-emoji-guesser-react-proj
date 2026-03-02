import React from 'react'
import Grace from '../assets/Grace.png'
import Sfundo from '../assets/Sfundo.png'

export const Footer = () => {
  return (
    <div className = "bg-pink-300 text-white font-semibold ">

      Created by yours truly!  
      <a href = "https://github.com/Graceyy-yy"><img  className  = "h-20 flex" src = {Grace} /></a>
      <a href = "https://github.com/SudoSfundo"><img className  = "h-20 flex" src = {Sfundo} /></a>
    </div>
  )
}
