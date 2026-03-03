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
      

    {/* <div className = " justify-self-end px-40 h-2 hover:bg-white"> */}
      <button className = "flex-col flex-1 pl-28 ">
        <GiHamburgerMenu />
      </button> 
    {/* </div> */}


    </div>

  
  )
}
