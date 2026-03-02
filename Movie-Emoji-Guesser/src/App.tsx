import './App.css';
import {Nav} from './components/Nav.js';
import {Footer} from './components/Footer.js';
import MovieWrapper from './components/MovieWrapper.js';

function App() {
  

  return (
    <>
   
    <Nav />
<<<<<<< HEAD
    <MovieWrapper />
=======
    <div className = "text-4xl">
      <MovieWrapper labelText='Insert Name' inputName='userName' actionHandler={()=>console.log("hi testing s")}></MovieWrapper>
    </div>
>>>>>>> 681a241122a4b6767df65352fd3011eff5210e53
    <Footer />
    </>
  )
}

export default App
