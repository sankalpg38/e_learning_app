import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './style/navbar.css';

function Navbar(){
    const [login, setLogin] = useState(false)
    // window.location.reload(true);

    useEffect(()=>{
        
        if(localStorage.getItem('token'))
        setLogin(true)
        else 
        setLogin(false)
        
        
        window.addEventListener('storage', checkLogIn, false)
    // return ()=>{
    //     window.removeEventListener('storage', checkLogIn)
    // }
    },[])
    function checkLogIn(){
        // console.log("HI")
        if(localStorage.getItem('token'))
        setLogin(true)
        else 
        setLogin(false)
        // console.log(login)
    }
    
    function logout(){
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user/courses">Courses</NavLink>
            <NavLink to="/about">About</NavLink>
            {   
            //console.log(login)
                
                // localStorage.getItem('token')?
                
                login && (
                <NavLink id="log" onClick={logout}>Logout</NavLink>
                )
                
                
                
            }
            {
                !login && (
                    <NavLink to="/login">Login</NavLink>
                )
            }
            
        </div>
    )
};
export default Navbar;