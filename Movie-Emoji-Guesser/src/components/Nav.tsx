import { GiHamburgerMenu } from "react-icons/gi"; 
import Logo from '../assets/Designer (1).png'
 

export const Nav = () => {
  return (
    <div className= "bg-pink-300 flex">
      <div className ="h-30 w-40" >
      <img src = {Logo} alt = "Logo" />
      </div>
        
    <div className= "font-mono text-white text-7xl font-bold flex flex-center align-items-center p-4">
        <h1 >
            Emoji Movie Guesser
        </h1>
    </div>
      

    
      <button className = "flex justify-self-end px-44">
        <GiHamburgerMenu />
      </button> 



    </div>

  
  )
}
