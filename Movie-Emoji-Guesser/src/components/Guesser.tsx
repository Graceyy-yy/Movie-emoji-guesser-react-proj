import { useState, useCallback } from 'react';
import { useUser } from '../context/useUser';
import MovieWrapper from './MovieWrapper';
import { useNavigate } from 'react-router-dom';
import MoviesDataset from '../data/movies.json';
import { type MovieType } from '../types/MovieType';

const movieItems = MoviesDataset as MovieType[];

function pickRandomMovie(items: MovieType[]): MovieType | null {
  if (!Array.isArray(items) || items.length === 0) return null;
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function emojisToString(emojis: string[], joiner = ' ') {
  return emojis.join(joiner);
}

function getRandomPuzzle() {
  const m = pickRandomMovie(movieItems);
  return {
    emojisStr: m ? emojisToString(m.emojis, ' ') : '',
    answer: m ? m.answer : '',
  };
}

export const Guesser = () => {
  const { name } = useUser();
  const navigate = useNavigate();

  const [{ emojisStr, answer }, setPuzzle] = useState(() => getRandomPuzzle());
  const [guessesLeft, setGuessesLeft] = useState<number>(10);
  const [score, setScore] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleRandomize = useCallback(() => {
    setPuzzle(getRandomPuzzle());
  }, []);

  const handleGuess = useCallback(
    (text: string) => {
      const guess = text.trim();
      if (!guess) return;

      const isCorrect = !!answer && guess.toLowerCase() === answer.toLowerCase();

      setGuessesLeft((prev) => {
        const next = Math.max(0, prev - 1);

        if (isCorrect) {
          setScore((s) => s + 1);
          if (next > 0) handleRandomize();
        }

        if (next === 0) setShowPopup(true);
         handleRandomize();
        return next;
      });
    },
    [answer, handleRandomize]
   
  );

  const closePopup = () => {
    navigate('/');
  };

  const retryGuess = () => {
    navigate(0);
  };

  return (
    <div className="text-4xl flex-1">
      <div className="justify-self-end">
        <label className="text-yellow-400 font-bold font-mono text-1xl">
          Hi {name || 'Player'}! You have {guessesLeft}{' '}
          {guessesLeft === 1 ? 'guess' : 'guesses'} left.
        </label>
      </div>



      <div>
        <MovieWrapper
          labelText= {emojisStr || 'Click Randomize to start 🎲'}
          inputName="movieGuess"
          actionHandler={handleGuess}
          disabled={guessesLeft === 0}
        />
      </div>

      <div className="flex justify-self-center">
        <button className="btn btn-random" onClick={handleRandomize}>
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
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white hover:text-pink-400 text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-3 text-yellow-500">
              Game Over !
            </h2>

            <p className="text-xl text-gray-700 mb-4">
              You scored <span className="font-bold">{score/2}</span> out of 10!
            </p>

            <div className = " mt-auto flex gap-6 p-6 justify-center">
              <button
              onClick={closePopup}
              className="font-bold p-2 text-white text-xl rounded bg-red-600 hover:bg-red-500"
            >
             Close
            </button>
      
             <button
              onClick={retryGuess}
              className="font-bold p-2 text-white text-xl rounded bg-orange-500 hover:bg-orange-400"
                  >
             Retry 
            </button>
           
            </div>
         
              

          </div>
        </div>
      )}
    </div>
  );
};