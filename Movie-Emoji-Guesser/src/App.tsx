import './App.css';
import { Nav } from './components/Nav.js';
import {Footer} from './components/Footer.js';
import MovieWrapper from './components/MovieWrapper.js';

function App() {
  

  return (
    <>
   
    <Nav />
    <div className = "text-4xl">
      <MovieWrapper labelText='Insert Name' inputName='userName' actionHandler={()=>console.log("hi testing s")}></MovieWrapper>
    </div>
    <Footer />
    </>
  )
}

export default App
