import React from 'react'
import MoviesDataset from '../data/movies.json'
import type { MovieType } from '../types/MovieType'
import { useEffect,useCallback, useState } from 'react';


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

const updateHandler = useCallback((id:MovieType['id'], newAnswer:MovieType['answer'], newEmojis:MovieType['emojis']) => {
  setMovis(prev =>
    prev.map(item =>(
      item.id === id
        ? { ...item, answer: newAnswer, emojis: newEmojis }
        : item
    )
    )
  )
}, [])
  return (

    <div>
      <h1 className = "text-yellow-500 text-6xl font-bold font-mono justify-self-center p-8">
        🌸 List of movies 🌸
      </h1>
    <div className= 'text-4xl flex flex-wrap gap-8 justify-center p-6'>

    
        {movis.map((movie)=>(

          <ul key ={movie.id}>
               <li >

        <div className = "flex flex-col border  rounded-xl bg-pink-400 w-52 h-96 hover:bg-pink-300 overflow-hidden">
            <img className = "w-full h-56 object-cover" src={`../src/images/${movie.answer}.jpg`} alt={`${movie.answer} image`}/>

            <div className = "px-3 pt-3">
              <h2 className = "text-white font-serif font-bold text-2xl text-center truncate">{movie.answer}</h2>
            <p className = "text-lg p-2 text-white">Emojis: {movie.emojis}</p>
            </div>
            

          <div className = " mt-auto flex gap-4 p-2 justify-center">
            <button className = " btn btn-random" onClick={()=>updateHandler(movie.id,"",[])}>Edit</button>
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
