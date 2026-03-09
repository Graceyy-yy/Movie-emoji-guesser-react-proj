import { createContext, useEffect, useState, type ReactNode } from 'react';
import {type user} from '../types/user';

const UserContext =createContext<user |undefined>(undefined);

export function UserProvider({ children }:{children:ReactNode}){
    const [name, setName] = useState<string>(() => localStorage.getItem('name') || '');

    function login(name:string){setName(name)}

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

    const value:user = {name,login}

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export{UserContext}
