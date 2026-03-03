import { GiHamburgerMenu } from "react-icons/gi"; 
import Logo from '../assets/Designer (1).png'
 

export const Nav = () => {
  return (
    <div className= "bg-pink-300 flex">
        <img className ="h-30 w-40" src = {Logo} alt = "Logo" />

        <h1 className= "font-mono text-white text-7xl font-bold display-flex flex-center align-items-center p-4">
            Emoji Movie Guesser
        </h1>

    <div className = "justify-content:left p-10">
       <GiHamburgerMenu/>
    </div>
    </div>

  
  )
}
