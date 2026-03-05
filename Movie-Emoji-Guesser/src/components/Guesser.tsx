import { useUser } from '../context/useUser'
import MovieWrapper from './MovieWrapper'



export const Guesser = () => {

const {name} =useUser();

  return ( 
    <div className= 'text-4xl flex-1'>

        <div>
            <label className = "bg-yellow-400 font-bold font-mono">
               Hi {name}! You have {5} guesses left.
            </label>
        </div>

        <div >
             <MovieWrapper labelText='Guess Movie' inputName='movieguess' actionHandler={(()=> console.log())} />
        </div>

        <div>
            <button className = "btn btn-random justify-items-center" onClick = {()=> console.log("Randomizing")}>Randomize</button>
        </div>
       
    </div>


  )
}
