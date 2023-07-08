import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import axios from 'axios'

function User() {
  // const navigate = useNavigate();
    let isLoggedin = false;
    if(localStorage.getItem('token')){
      isLoggedin = true;
    }else{
      isLoggedin = false;
    }
    // console.log(isLoggedin);


  if(isLoggedin)
  return <Outlet/>
  else
  return <Navigate to="/login" />;
  // return (
  //   <>
  //   <div>Login to View this page</div>
  //   </>
  // )
}

export default User