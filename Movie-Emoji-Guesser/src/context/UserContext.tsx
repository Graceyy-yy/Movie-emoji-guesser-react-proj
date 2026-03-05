import { createContext, useRef, useState, type ReactNode } from 'react';
import {type user} from '../types/user';


const UserContext =createContext<user |undefined>(undefined);

export function UserProvider({ children }:{children:ReactNode}){
    const [name, setName] = useState<user>({name : ''});

   // function login(name:string){setName({name})}

    const value:user = {name,login}

    return (
<<<<<<< HEAD
        <UserContext.Provider value={{name}}>
=======
        <UserContext.Provider value={value}>
>>>>>>> de8c9f91f91e22169d0f239f192dd2a350bf3b95
            {children}
        </UserContext.Provider>
    )
}

export{UserContext}
