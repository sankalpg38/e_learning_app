import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/style/login.css'

function Login() {
  // const [userInput, setUserInput] = useState({
  //   email: "",
  //   password: ""
  // })
  const navigate = useNavigate();
  const [email, setEmail] = useState('eve.holt@reqres.in')
  const [password, setPassword] = useState('')
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  // const changeHandler=(e)=>{
  //   // const name = e.target.name;
  //   // const value = e.target.value;
  //   // setUserInput({...userInput,[name]:value})
  //   // console.log(userInput)

  // }
  const handleSubmit=(e)=>{
    // var element = document.getElementById('log')
    // element.classList.remove("active")
    e.preventDefault();
    // e.stopImmediatePropagation();
    // console.log({email,password})
    axios.post('https://reqres.in/api/login',{
      email: email,
      password: password
    })
    .then(result=>{
      // console.log(result.data)
      localStorage.setItem('token', result.data.token)
      
      
      navigate('/user/courses')
      window.location.reload();
    })
    .catch(error=>{
      alert("Please Fill all the fields");
    })
    setEmail('eve.holt@reqres.in')
    setPassword('')
  }
  return (
    <div className='form-section'>
      <form action=''>
        <h2>Login</h2>
        <div>
          <p htmlFor="email">Email:</p>
          <input type='text' autoComplete='off' value={email} onChange={handleEmail} name='email' id='email'/>
          <p htmlFor="email">Password:</p>
          <input type='password' autoComplete='off' value={password} onChange={handlePassword} name='password' id='password'/>
          <br/>
          <button type='submit' onClick={handleSubmit}>Login</button>
            
        </div>
      </form>
    </div>
  )
}

export default Login