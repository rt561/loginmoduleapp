import React , { useState } from 'react';
import axios from "axios";
import './Login.css';


const Login=() =>{

const[values,setvalues]=useState({
    email:" ",
    pass:" ",
    showPass:"false",
})
const [message, setMessage]=useState('') 

const handlesubmit=(e)=>{

   e.preventDefault();
   axios
   .post("https://reqres.in/api/login",{
    email:values.email,
    password:values.pass,

 })

    
 .then((res)=>
 { localStorage.setItem("token",res.data.token)})

 
 .catch((err)=>console.log(err))

   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
if (regEx.test(values?.email)) {
  console.log(message)
      setMessage(" ");
    } else {
         setMessage("invalid email");
     
    }
   
  
}

return (
    
     <form className='login-form'onSubmit={handlesubmit}>
       <h3 className='login-screen-title'><b>Login</b></h3>
       <div  className='form-group'>
       <label htmlFor='email'><b>Email</b></label>
       <input type="text"required id="name"placeholder='email'className='inp'
       onChange={(e)=>setvalues({... values,email:e.target.value})}
       />
       <p>{message}</p>

       </div>
        <div  className='form-group'>
       <label htmlFor='password'><b>Password</b></label>
       <input type="password"required id="name"placeholder='password'className='inp-1'
       onChange={(e)=>setvalues({... values,pass:e.target.value})}
       minLength='9'
       maxLength='20'
       />
       
      </div>
      <button type="submit"className='btn btn-primary' >Login</button>
      </form>
         

)
}

export default Login