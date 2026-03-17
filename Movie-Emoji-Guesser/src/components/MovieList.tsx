import React from 'react'
import MoviesDataset from '../data/movies.json'
import type { MovieType } from '../types/MovieType'
import { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const movies = MoviesDataset as MovieType[];

export const MovieList = () => {
  const [newAnswer, setNewAnswer] = useState<string>('');
  const [newEmoji, setNewEmoji] = useState<string>('');
  const [newImage, setNewImage] = useState<string>('');
  const [showAdded, setShowAdded] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const Storage_Key = 'AllMovies'

  const [movis, setMovis] = useState<MovieType[]>(() => {
    try {
      if (typeof window == 'undefined') return movies
      const raw = localStorage.getItem(Storage_Key)
      const parsed = raw ? (JSON.parse(raw) as MovieType[]) : null
      return Array.isArray(parsed) ? parsed : movies
    } catch {
      return movies
    }
  })

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(Storage_Key, JSON.stringify(movis))
      }
    } catch {
      //
    }
  }, [movis])

  const deleteHandler = useCallback((id: MovieType['id']) => {
    setMovis(prev => prev.filter(movie => movie.id !== id))
    console.log('just deleted movie with id: ' + id)
  }, [])

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const closePopup = () => {
    navigate(0);
  };

  const AddMovieHandler = useCallback(() => {
    if (!newAnswer.trim() || !newEmoji.trim()) return;

    const newMovie: MovieType = {
      id: Math.random(),
      emojis: newEmoji.trim().split(/\s+/),
      answer: newAnswer.trim(),
      imageBase64: newImage || undefined,
    };

    setMovis(prev => [...prev, newMovie]);
    setNewAnswer('');
    setNewEmoji('');
    setNewImage('');
  }, [newAnswer, newEmoji, newImage])

  const ImageUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setNewImage(reader.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <div>
        <h1 className="text-yellow-500 text-6xl font-bold font-mono justify-self-center p-8">
          🌸 List of movies 🌸
        </h1>
    </div>

    <div className='justify-self-end px-24'>
      <button className="h-12 w-30 text-xs btn btn-done" onClick={() => setShowPopup(true)}>
          Add Movie
      </button>
    </div>

    <div className='text-4xl flex flex-wrap gap-8 justify-center p-6'>
      {movis.map((movie) => (
        <ul key={movie.id}>
           <li>
    <div
      className="flex flex-col border rounded-xl w-52 h-96 overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setHoveredId(movie.id)}
      onMouseLeave={() => setHoveredId(null)}
    >                
        <img
        className="absolute inset-0 w-full h-full object-cover"
        src={movie.imageBase64 ?? `../src/images/${movie.answer}.jpg`}
        alt={`${movie.answer} image`}
      />

    {hoveredId !== movie.id && (
      <div className="absolute bottom-0 w-full bg-pink-300 px-3 py-2">
         <h2 className="text-white font-serif font-bold text-2xl text-center truncate">
          {movie.answer}
        </h2>
      </div>
    )}

   {hoveredId === movie.id && (
       <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-end pb-6 gap-4 transition-all duration-300">
         <h2 className="text-white font-serif font-bold text-2xl text-center px-3">
           {movie.answer}
         </h2>
         <p className="text-white text-sm">Emojis: {movie.emojis}</p>
         <div className="flex gap-4">
           <button className="btn btn-random">Edit</button>

           <button
             className="btn btn-delete"
                        onClick={() => deleteHandler(movie.id)}
           >
             Delete
            </button>

         </div>
       </div>
     )}
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
        <h1 className="text-yellow-400 font-bold text-4xl">
          🎀 Add Movie 🎀
        </h1>

        <p className="text-pink-400 font-semibold text-3xl"><br />Name of movie:</p>
        <input
          placeholder="Enter movie"
          className="input input-add"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />

        <p className="text-pink-400 font-semibold text-3xl"><br />Insert Emojis:</p>
        <input
          placeholder="Enter emojis"
          className="input input-add"
          value={newEmoji}
          onChange={(e) => setNewEmoji(e.target.value)}
        />

        <p className="text-pink-400 font-semibold text-3xl"><br />Upload movie poster:</p>
        <input
          type="file"
          accept="image/*"
          className="text-lg font-bold text-pink-400 border border-pink-400 file:bg-pink-300 file:text-white file:border-white"
          onChange={ImageUploadHandler}
         />

    <div className="mt-auto flex gap-6 p-6 justify-center">
      <button
        onClick={closePopup}
        className="font-bold p-2 text-white text-xl rounded bg-red-600 hover:bg-red-400"
       >
        Close
      </button>

      <button
        className="font-bold p-2 text-white text-xl rounded bg-green-500 hover:bg-green-300"
        onClick={() => {
          AddMovieHandler();
          setShowAdded(true);
        }}
      >
        Add
      </button>
    </div>

 {showAdded && (
    <div
      className="fixed inset-0 bg-pink-300 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center relative">

        <p className='text-green-500 font-bold text-2xl'>🤪 Movie Added Successfully! 🤪</p>

        <div className="mt-auto flex gap-6 p-6 justify-center">
          <button
            onClick={closePopup}
            className="font-bold p-2 text-white text-xl rounded bg-red-600 hover:bg-red-400"
          >
            Close
          </button>
        </div>
        
      </div>
    </div>
  )}
</div>
</div>
)}
    </div>
    </div>
  )
}