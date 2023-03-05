import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";


export default function MovieApp(){
    return (

        <>
        <AppNavbar></AppNavbar>
        <main>
            <Outlet/>
        </main>
            
        </>


    )
}