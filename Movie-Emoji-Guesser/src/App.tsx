import './App.css';
import MovieWrapper from './components/MovieWrapper';

function App() {
  

  return (
       
    <div className = "text-4xl">
      <MovieWrapper labelText='Insert Name' inputName='userName' actionHandler={()=>console.log("hi testing s")}></MovieWrapper>
    </div>
    
  )
}

export default App
