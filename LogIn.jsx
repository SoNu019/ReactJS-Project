import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import style from "./LogIn.module.css"
import 'react-toastify/dist/ReactToastify.css';

const LogIn = ({onLogin}) => {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();

    const storeUser=JSON.parse(localStorage.getItem(email))
    if(storeUser && storeUser.password===password){
      toast.success("Login Successful")
      localStorage.setItem('isLoggedIn','true');
      if(onLogin){
        onLogin()
      }
      navigate("/home")
     } else{
    alert("Invalid Email or Password")
      }
    }
  return (
    <div id={style.box2} className={style.box2}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
        />
        <form onSubmit={handleLogin}>
          <br /><br />
          <h1>Login</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" className={style.formlogin}>Email Address:</label>
            <br /><br />
            <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required id="exampleInputEmail1"  aria-describedby="emailHelp" autocomplete="off"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className={style.formlogin}>Password :</label>
                <br /><br />
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required id="exampleInputPassword1" autocomplete="off"/>
            </div>
            <br /><br />
            <button onClick={handleLogin} type='submit' id={style.btn} className='btn btn-success'>Log In</button>
            <Link to='/' className='btn btn-primary ms-5 ' style={{height:50,width:200,fontSize:25}}>Back</Link>
            <br /><br />
        </form>
    </div>
  )
}
export default LogIn
