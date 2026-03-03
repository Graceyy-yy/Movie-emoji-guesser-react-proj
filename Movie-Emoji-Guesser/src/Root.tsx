import { Outlet } from "react-router-dom";
import {Nav} from './components/Nav';
import {Footer} from './components/Footer';

export default function Root(){
    return(
        <div className= "border border-pink-500 flex flex-col h-screen">

        <Nav/>
            <Outlet/>
        <Footer/>
        </div>
    )
}