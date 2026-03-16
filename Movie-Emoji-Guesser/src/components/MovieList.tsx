import React from 'react'
import MoviesDataset from '../data/movies.json'
import type { MovieType } from '../types/MovieType'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const movies= MoviesDataset as MovieType[];

export const MovieList = () => {
   const [showPopup, setShowPopup] = useState<boolean>(false);
   const navigate = useNavigate();

     const closePopup = () => {
    navigate('/');
  };

  return (

    <div>
      <div className = "flex flex-wrap">
           <h1 className = "text-yellow-500 text-6xl font-bold font-mono justify-self-center p-8">
        🌸 List of movies 🌸
           </h1>
              
      <button className="h-10 w-20 text-xs btn btn-done" onClick={() => setShowPopup(true)}
>
  Add Movie
</button>

      </div>
     


    <div className= 'text-4xl flex flex-wrap gap-8 justify-center p-6'>

    
        {movies.map((movie)=>(

          <ul>
               <li key ={movie.id}>

        <div className = "flex flex-col border  rounded-xl bg-pink-300 w-52 h-96 hover:bg-pink-200 overflow-hidden">
            <img className = "w-full h-56 object-cover" src={`../src/images/${movie.answer}.jpg`} alt={`${movie.answer} image`}/>

            <div className = "px-3 pt-3">
              <h2 className = "text-white font-serif font-bold text-2xl text-center truncate">{movie.answer}</h2>
            <p className = "text-lg p-2 text-white">Emojis: {movie.emojis}</p>
            </div>
            

          <div className = " mt-auto flex gap-4 p-2 justify-center">
            <button className = " btn btn-random">Edit</button>
            <button className = " btn btn-delete" >Delete</button>
          </div>
          
          </div>
          </li>
          </ul>
       
         
        ))}

        {showPopup && (
        <div
          className="fixed inset-0 bg-pink-300 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center relative">
           
           <h1 className = "text-yellow-400 font-bold text-4xl">
           🎀 Add Movie 🎀
           </h1>

            <p className = " text-pink-400 font-semibold text-3xl"><br></br>Name of movie:</p>
            <input placeholder = "Enter movie" className = "input input-add"></input>

            <p className = " text-pink-400 font-semibold text-3xl"><br></br>Insert Emojis:</p>
            <input placeholder = "Enter emojis" className = "input input-add"></input>

            <p className = " text-pink-400 font-semibold text-3xl"><br></br>Upload movie poster:</p>
            <input type= "file" className = "text-lg font-bold text-pink-400 border border-pink-400 file:bg-pink-300 file:text-white file:border-white"></input>

            <div className = " mt-auto flex gap-6 p-6 justify-center">
              <button
              onClick={closePopup}
              className="font-bold p-2 text-white text-xl rounded bg-red-600 hover:bg-red-400"
            >
             Close
            </button>
      
            <button className="font-bold p-2 text-white text-xl rounded bg-green-500 hover:bg-green-300">
              Add
            </button>
           
            </div>
         
              

          </div>
        </div>
      )}
    </div>

    </div>
  )
}
