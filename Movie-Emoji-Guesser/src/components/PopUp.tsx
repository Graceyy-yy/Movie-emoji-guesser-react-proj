 import { useState } from 'react';
import type { MovieType } from '../types/MovieType';



  type popUpProps={
    mode:"Add"| "Edit";
    movie:MovieType|null
    popUpTitle:string;
    buttonFuncType:string;
    setShowPopup:React.Dispatch<React.SetStateAction<boolean>>
    
    onAdd?:(movie:MovieType)=>void;
    onSave?:(id:number,answer:string,emojis:string[])=>void
    onClose?:()=>void;

  }


  
 export default function PopUp({mode,movie,popUpTitle, buttonFuncType,setShowPopup,onSave,onClose}:popUpProps){
  



    // const navigate = useNavigate();
  
       const closePopup = () => {
      onClose?.();
      setShowPopup(false)
    };

 

    const[moviePoster,setMoviePoster]= useState<File|null>(null)
    

const [answer, setAnswer] = useState(() =>
  mode === "Edit" && movie ? movie.answer : ""
);

const [emojis, setEmojis] = useState(() =>
  mode === "Edit" && movie ? movie.emojis.join("") : ""
);
    return(
        
 
        <div
          className="fixed inset-0 bg-pink-300 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center relative">
           
           <h1 className = "text-yellow-400 font-bold text-4xl">
          {popUpTitle} {/*'🎀 Add Movie 🎀'*/}
           </h1>

            <p className = " text-pink-400 font-semibold text-3xl"><br></br>Name of movie:</p>
            <input placeholder = "Enter movie" value={answer} onChange={(e)=>setAnswer(e.target.value)} className = "input input-add"></input>

            <p className = " text-pink-400 font-semibold text-3xl"><br></br>Insert Emojis:</p>
            <input placeholder = "Enter emojis" value={emojis} onChange={(e)=>setEmojis(e.target.value)} className = "input input-add"></input>

            <p className = " text-pink-400 font-semibold text-3xl"><br></br>Upload movie poster:</p>
            <input type= "file"  onChange={(e)=>setMoviePoster(e.target.files?.[0]??moviePoster)} className = "text-lg font-bold text-pink-400 border border-pink-400 file:bg-pink-300 file:text-white file:border-white"></input>

            <div className = " mt-auto flex gap-6 p-6 justify-center">
              <button
              onClick={closePopup}
              className="font-bold p-2 text-white text-xl rounded bg-red-600 hover:bg-red-400"
            >
             Close
            </button>
      
<button
  onClick={() => {
    if (!movie) return;

    const finalAnswer = answer.trim() || movie.answer;
    const finalEmojis =
      emojis.trim().length > 0 ? emojis.split("") : movie.emojis;

    // STORE OLD POSTER NAME BASED ON ORIGINAL MOVIE NAME
    const oldPoster = `${movie.answer}.jpg`;

    let finalPosterName = oldPoster; 
    let finalPoster = null;

    // ONLY IF USER SELECTED A NEW FILE → rename and use it
    if (moviePoster) {
      finalPosterName = `${finalAnswer}.jpg`;

      finalPoster = new File(
        [moviePoster],
        finalPosterName,
        { type: moviePoster.type }
      );

      console.log("Uploaded & renamed new poster:", finalPosterName,finalPoster);
    } else {
      console.log("No new poster uploaded → keeping old:", oldPoster);
    }

    // Call Update
    onSave!(movie.id, finalAnswer, finalEmojis);

    setShowPopup(false);
  }}
>
  {buttonFuncType}
</button>
           
            </div>
         
              

          </div>
        </div>
    
  )

}