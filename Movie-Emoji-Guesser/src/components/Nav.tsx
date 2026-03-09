import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Designer (1).png";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    { label: "Home", action: () => navigate("/") },
    { label: "Guess Movies", action: () => navigate("/Guesser") },
    { label: "Movies List", action: () => navigate("/MovieList") }
  ];

  return (
    <div className="bg-pink-300 flex items-center justify-between px-4">
    
      <div className="h-30 w-40">
        <img src={Logo} alt="Logo" />
      </div>

   
      <div className="font-mono text-white text-3xl sm:text-5xl md:text-7xl font-bold text-center flex-grow">
        <h1>Emoji Movie Guesser</h1>
      </div>

     
      <div
        className="relative"
        tabIndex={-1}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setOpen(false);
          }
        }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="main-menu"
        >
          <SlMenu className="text-4xl text-white" />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        {open && (
          <div
            id="main-menu"
            role="menu"
            aria-label="Main menu"
            className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/5 p-1 z-50"
          >
            {items.map((it) => (
              <button
                key={it.label}
                role="menuitem"
                className="w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-pink-50 hover:text-pink-400 focus:bg-pink-100 focus:outline-none"
                onClick={() => {
                  setOpen(false);
                  it.action();
                }}
              >
                {it.label}
              </button>
            ))}

            <div className="my-1 border-t border-gray-200" />
            <button
              role="menuitem"
              onClick={() => setOpen(false)}
              className="w-full text-left px-3 py-2 rounded-lg text-gray-500 hover:bg-red-100  hover:text-red-600"
            >
              Close Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
