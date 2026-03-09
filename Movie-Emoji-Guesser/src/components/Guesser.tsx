import { useState,useCallback } from 'react';
import { useUser } from '../context/useUser'
import MovieWrapper from './MovieWrapper'
import { useNavigate } from 'react-router-dom';

export const Guesser = () => {
  const [guess, setGuess] = useState(10);
  const [score, setScore] = useState(0);        
  const [showPopup, setShowPopup] = useState(false); 

  const { name } = useUser();
  const navigate = useNavigate();


 const handleGuess = useCallback(() => {
  setGuess(prev => {
    const newGuess = Math.max(0, prev - 1);

    if (newGuess === 0) {
      setShowPopup(true);
    }

    return newGuess;
  });
}, []);
  


  const closePopup = () => {
    navigate("/");  
  };

  const retryGuess = () => {
    navigate(0);
  };

  return (
    <div className='text-4xl flex-1'>

      <div className="justify-self-end">
        <label className="text-yellow-400 font-bold font-mono text-1xl">
          Hi {name || 'Player'}! You have {guess} {guess === 1 ? 'guess' : 'guesses'} left.
        </label>
      </div>

      <div>
        <MovieWrapper
          labelText='Guess Movie'
          inputName='movieGuess'
          actionHandler={() => handleGuess()}
          disabled={guess === 0}
          onCorrect = {() => setScore(prev => prev + 1)}
        />
      </div>

      <div className="flex justify-self-center">
        <button className="btn btn-random" onClick={() => console.log("Randomizing")}>
          Randomize
        </button>
      </div>


      {showPopup && (
        <div
          className="fixed inset-0 bg-pink-300 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center relative">

            

            <h2 className="text-3xl font-bold mb-3 text-yellow-500">Game Over !</h2>

            <p className="text-xl text-gray-700 mb-4">
              You scored <span className="font-bold">{score}</span> out of 10!
            </p>

            <div>
            </div>
            
           
              <button
              onClick={closePopup}
              className=" font-bold p-2 text-white text-xl rounded bg-red-600 hover:bg-red-500"
            >
             Close
            </button>
      
             <button
              onClick={retryGuess}
              className="  font-bold p-2 text-white text-xl rounded bg-orange-500 hover:bg-orange-400"
                  >
             Retry 
            </button>
           

          </div>
        </div>
      )}

    </div>
  );
};