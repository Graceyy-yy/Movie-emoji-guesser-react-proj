import React ,{ useRef} from "react";

import { useUser } from '../context/useUser';


type MovieWrapperProps = {
  labelText: string;
  inputName: string;
  userDisabled?: boolean;
  actionHandler: (text: string) => void;
  onCorrect?: () => void;
  disabled : boolean;
};

export default function MovieWrapper({ labelText, inputName, actionHandler ,userDisabled}: MovieWrapperProps) {
  const inputRef = useRef<HTMLInputElement>(null);
const { login } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputRef.current?.value ?? "";
    actionHandler(text.trim());   // <-- ONLY trigger guess logic

    if (userDisabled){
       login(text)
    }
   
    if (inputRef.current) {
    inputRef.current.value = "";
  }
  };

  return (
    <form className="justify-items-center" onSubmit={handleSubmit}>
      <div className="font-sans font-bold text-pink-500 py-28 px-28">
        <label htmlFor={inputName}>{labelText}</label>
      </div>

      <div className="flex px-2 py-0">
        <input
          className="input input-first"
          name={inputName}
          ref={inputRef}
          placeholder="Enter name"

        />
      </div>

      <div className="flex p-6 px-44">
        <button className="btn btn-done justify-items-center" type="submit">
          Done
        </button>
      </div>
    </form>
  );
}