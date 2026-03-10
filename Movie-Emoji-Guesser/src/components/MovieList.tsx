import React from 'react'
import MoviesDataset from '../data/movies.json'
import type { MovieType } from '../types/MovieType'

const movies= MoviesDataset as MovieType[];

export const MovieList = () => {
  return (
    <div className= 'text-4xl flex-1'>
        {movies.map((movie)=>(
          
          <li key={movie.id}>
        <div>
            <img src={`../src/images/${movie.answer}.jpg`} alt={`${movie.answer} image`}/>
            <h2>{movie.answer}</h2>
            <p>{movie.emojis}</p>
            </div>
            <button>Edit Movie Details</button>
            <button>Delete Movie</button>
          </li>
         
        ))}
    </div>
  )
}
