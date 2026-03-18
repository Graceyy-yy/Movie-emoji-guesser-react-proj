import React from 'react'
import MoviesDataset from '../data/movies.json'
import type { MovieType } from '../types/MovieType'
import { useEffect,useCallback } from 'react';

import { useState } from 'react';
import PopUp from './PopUp';

const movies= MoviesDataset as MovieType[];


export const MovieList = () => {
   const [showPopup, setShowPopup] = useState<boolean>(false);
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
  },[]);

const [popupMode, setPopupMode] = useState<"Add" | "Edit">("Add");
const [movieBeingEdited, setMovieBeingEdited] = useState<MovieType | null>(null);

const updateHandler = useCallback((id:MovieType['id'], newAnswer:MovieType['answer'], newEmojis:MovieType['emojis']) => {
  setMovis(prev =>
    prev.map(item =>(
      item.id === id? 
      { ...item, answer: newAnswer, emojis: newEmojis } : item
    )
    )
  )

  console.log(`Just updated the movie wih id: ${id}: ${newAnswer} and emjos: ${newEmojis}`)
  
}, [])
  return (

    <div>
      <div className = "flex flex-wrap">
           <h1 className = "text-yellow-500 text-6xl font-bold font-mono justify-self-center p-8">
        🌸 List of movies 🌸
           </h1>
              
      <button className="h-10 w-20 text-xs btn btn-done" onClick={() => {setPopupMode("Add"); setMovieBeingEdited(null);setShowPopup(true)}}>
  Add Movie
</button>


{showPopup  && (
  <PopUp 
    mode={popupMode}
    movie={movieBeingEdited}
    popUpTitle={popupMode+" Movie"}
    buttonFuncType={popupMode}
    setShowPopup={setShowPopup}
 
    
    onAdd={(newMovie) => {
      setMovis(prev => [...prev, newMovie]);
    }}
    onSave={(id, newName, newEmojis) => {

      
      updateHandler(id, newName, newEmojis);
    }}

  />
)}


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
            <button className = " btn btn-random" onClick={()=>{setPopupMode("Edit"); setMovieBeingEdited(movie); setShowPopup(true)}}>Edit</button>
            <button className = " btn btn-delete"  onClick={()=>deleteHandler(movie.id)}>Delete</button>
          </div>
          
          </div>
          </li>
          </ul>
       
         
        ))}


    </div>

    </div>
  )
}
