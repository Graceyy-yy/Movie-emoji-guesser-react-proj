import './App.css';
import { Nav } from './components/Nav.js';
import {Footer} from './components/Footer.js';
import MovieWrapper from './components/MovieWrapper.js';
import MovieWrapper from './components/MovieWrapper';

function App() {
  

  return (
    <div className= "border border-pink-500 flex flex-col h-screen">
    <div className = ""><Nav /></div>
    <div className = "text-4xl flex-1">
       
    <div className = "text-4xl">
      <MovieWrapper labelText='Insert Name' inputName='userName' actionHandler={()=>console.log("hi testing s")}></MovieWrapper>
    </div>
   <div  className = "justify-self-end "><Footer /></div>
    </div>
    
  )
}

export default App
