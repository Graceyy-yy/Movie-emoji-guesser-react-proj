import { createContext, useState, type ReactNode } from 'react';
import {type user} from '../types/user';


const UserContext =createContext<user |undefined>(undefined);

export function UserProvider({ children }:{children:ReactNode}){
    const [name, setName] = useState('');

    function login(name:string){setName(name)}

    return (
        <UserContext.Provider value={{name, login}}>
            {children}
        </UserContext.Provider>
    )
}

export{UserContext}
