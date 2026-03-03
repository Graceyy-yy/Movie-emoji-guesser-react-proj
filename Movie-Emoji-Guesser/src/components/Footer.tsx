import Grace from '../assets/Grace.png';
import Sudo from '../assets/Sudo.png';

export const Footer = () => {
  return (
    <footer className = "bg-pink-300 text-white font-semibold flex">

      Created by yours truly!  
      <a href = "https://github.com/Graceyy-yy"><img  className  = "h-20" src = {Grace} /></a>
      <a href = "https://github.com/SudoSfundo"><img className  = "h-20" src = {Sudo} /></a>
    </footer>
  )
}
