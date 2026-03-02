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

    <label htmlFor={inputName} >{labelText}</label>
    <input name={inputName} ref={inputRef}></input>
    <button type="submit">Done</button>

    </form>
)

}