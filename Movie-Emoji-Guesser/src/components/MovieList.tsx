import React from 'react'
import MoviesDataset from '../data/movies.json'
import type { MovieType } from '../types/MovieType'
import { useEffect,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const movies= MoviesDataset as MovieType[];

export const MovieList = () => {
  
  const Storage_Key= 'AllMovies'

  //to Initialize from local Storage eelse fall back to bundled dataset

  const [movis,setMovis] = useState<MovieType[]>(()=>{
    try{
      if (typeof window=='undefined') return movies
      const raw = localStorage.getItem(Storage_Key)
      const parsed = raw? (JSON.parse(raw) as MovieType[]):null
      return Array.isArray(parsed)? parsed:movies
    }catch{
    return movies}

  })

  //Persist whenever movis chnages

  useEffect(()=>{
    try {
      if (typeof window !== 'undefined'){
        localStorage.setItem(Storage_Key,JSON.stringify(movis))

      }
    }
      catch{
        //
      }
    
  },[movis])

  const deleteHandler =useCallback((id:MovieType['id']) =>{
    setMovis(prev=> prev.filter(movie=>movie.id !==id))
    console.log('jst deleted movie with id: '+id)
  },[])
   const [showPopup, setShowPopup] = useState<boolean>(false);
   const navigate = useNavigate();

     const closePopup = () => {
    navigate(0);
  };

  return (

    <div>
      <div>
           <h1 className = "text-yellow-500 text-6xl font-bold font-mono justify-self-center p-8">
        🌸 List of movies 🌸
           </h1>
      </div>

    <div className='justify-self-end px-24'>
      <button className="h-12 w-30 text-xs btn btn-done" onClick={() => setShowPopup(true)}>
         Add Movie
      </button>
    </div>
    
    <div className= 'text-4xl flex flex-wrap gap-8 justify-center p-6'>

    
        {movis.map((movie)=>(

          <ul key ={movie.id}>
               <li >

        <div className = "flex flex-col border  rounded-xl bg-pink-300 w-52 h-96 hover:bg-pink-200 overflow-hidden">
            <img className = "w-full h-56 object-cover" src={`../src/images/${movie.answer}.jpg`} alt={`${movie.answer} image`}/>

            <div className = "px-3 pt-3">
              <h2 className = "text-white font-serif font-bold text-2xl text-center truncate">{movie.answer}</h2>
            <p className = "text-lg p-2 text-white">Emojis: {movie.emojis}</p>
            </div>
            

          <div className = " mt-auto flex gap-4 p-2 justify-center">
            <button className = " btn btn-random">Edit</button>
            <button className = " btn btn-delete"  onClick={()=>deleteHandler(movie.id)}>Delete</button>
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
