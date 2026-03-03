import React ,{ useRef} from "react";

type MovieWrapperProps={

   
    labelText:string;
    inputName:string

    actionHandler:(text:string)=>void

}


export default function MovieWrapper({labelText,inputName,actionHandler}:MovieWrapperProps){

    const inputRef= useRef<HTMLInputElement>(null);

    
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputRef.current?.value ?? "";
    actionHandler(text.trim());
  };

    
return(
    <form onSubmit={handleSubmit}>

    <div className = "font-sans font-bold text-pink-500 flex flex-center p-40">
      <label htmlFor={inputName} >{labelText}</label>
    </div>

    <div>
      <input className="input input-first" name={inputName} ref={inputRef} placeholder ="Enter name"></input>
    </div>
    
    <div className = "">
    <button className = "btn btn-done" type="submit">Done</button>
    {/* <button className = "btn btn-delete" type="submit">Delete</button>
    <button className = "btn btn-update" type="submit">Update</button> */}

    </div>
    </form>
)

}

