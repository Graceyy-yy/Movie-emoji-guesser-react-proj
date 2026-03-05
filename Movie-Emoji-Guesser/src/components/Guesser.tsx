
import MovieWrapper from './MovieWrapper'


export const Guesser = () => {



  return ( 
    <div className= 'text-4xl flex-1'>

        <div className = "justify-self-end">
            <label className = "text-yellow-400 font-bold font-mono text-1xl ">
               Hi ! You have {} guesses left.
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
