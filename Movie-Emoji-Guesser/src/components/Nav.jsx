import { SlMenu } from "react-icons/sl"; 
import React from 'react'
import Logo from '../assets/Designer (1).png'
 

export const Nav = () => {
  return (
    <div>
        <img src = {Logo} />
        <h1>
            Emoji Movie Guesser
        </h1>

        <SlMenu /> 
    </div>
  )
}
