import Grace from '../assets/Grace.png';
import Sudo from '../assets/Sudo.png';

export const Footer = () => {
  return (
    <footer className = "bg-pink-300 flex">
    <div className = "text-white flex font-bold font-mono px-96 text-2xl">
        Created by yours truly! 
      <a href = "https://github.com/Graceyy-yy"><img alt = "Grace" className  = "h-20 flex-1" src = {Grace} /></a>
      <a href = "https://github.com/SudoSfundo"><img alt = "Sudo" className  = "h-20 flex-1" src = {Sudo} /></a>
    </div>
      
    </footer>
  )
}
