import React from 'react'
import MoviesDataset from '../data/movies.json'
import type { MovieType } from '../types/MovieType'

const movies= MoviesDataset as MovieType[];

export const MovieList = () => {
  return (

    <div>
      <h1 className = "text-yellow-500 text-6xl font-bold font-mono justify-self-center p-8">
        🌸 List of movies 🌸
      </h1>
    <div className= 'text-4xl flex flex-wrap gap-8 justify-center p-6'>

    
        {movies.map((movie)=>(

          <ul>
               <li key ={movie.id}>

        <div className = "flex flex-col border  rounded-xl bg-pink-400 w-52 h-96 hover:bg-pink-300 overflow-hidden">
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
    </div>

    </div>
  )
}
