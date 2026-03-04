import { useNavigate } from 'react-router-dom';
import './App.css';
import MovieWrapper from './components/MovieWrapper.js';




function App() {
  
const navigate =useNavigate();
  return (
  
   
    <div className = "text-4xl flex-1">
      <MovieWrapper labelText='Insert Name' inputName='userName' actionHandler={()=>navigate(`/Guesser`)}></MovieWrapper>
    </div>
   
  )
}

export default App
