<<<<<<< HEAD

=======
import { useUser } from '../context/useUser'
>>>>>>> de8c9f91f91e22169d0f239f192dd2a350bf3b95
import MovieWrapper from './MovieWrapper'



export const Guesser = () => {

<<<<<<< HEAD

=======
const {name} =useUser();
>>>>>>> de8c9f91f91e22169d0f239f192dd2a350bf3b95

  return ( 
    <div className= 'text-4xl flex-1'>

        <div className = "justify-self-end">
            <label className = "text-yellow-400 font-bold font-mono text-1xl ">
<<<<<<< HEAD
               Hi ! You have {} guesses left.
=======
               Hi {name}! You have {5} guesses left.
>>>>>>> de8c9f91f91e22169d0f239f192dd2a350bf3b95
            </label>
        </div>

        <div>
             <MovieWrapper labelText='Guess Movie' inputName='movieGuess' actionHandler={(()=> console.log())} />
              
        </div>

        <div className = "flex justify-self-center">
           <button className = "btn btn-random" onClick = {()=> console.log("Randomizing")}>Randomize</button>
        </div>
       
    </div>


  )
}
