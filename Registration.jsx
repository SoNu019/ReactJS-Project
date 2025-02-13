import React, { useState } from 'react'
import style from './Registration.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = ({onSignUp}) => {
    console.log(onSignUp);
    const [username,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const handleSignup=(e)=>{
e.preventDefault();
const existingUser=localStorage.getItem(email);
if(existingUser){
    toast.error("User Already Exists ")
    return;
}

const user={username,email,password};
localStorage.setItem(email,JSON.stringify(user))
toast.success("sign up Successfully")
if(onSignUp){
    onSignUp();
}
setTimeout(() => {
    navigate("/")
}, 1500);
    };
  return (
    <div className={style.box}>
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
      <form onSubmit={handleSignup}>
        <div className="mb-3">
            <h1>User Information</h1>
            <br />
            <label htmlFor="exampleInputUsername1" className={style.formlabel}>Username :</label>
            <br /><br />
            <input type="name" className="form-control" value={username} onChange={(e)=>setUserName(e.target.value)} required id="exampleInputUsername1" aria-describedby="userHelp" autocomplete="off"/>
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" className={style.formlabel}>Email :</label>
            <br /><br />
            <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required id="exampleInputEmail1" autocomplete="off" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className={style.formlabel}>Password :</label>
                <br /><br />
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required id="exampleInputPassword1" autocomplete="off"/>
            </div>
            <br />
            <button type="submit" id={style.btn} class="btn btn-dark">Sign Up</button>
            <Link to='/' className='btn btn-primary ms-5 ' style={{height:50,width:200,fontSize:25}}>Back</Link>
            <br /><br />
      </form>
      </div>
    
  )
}

export default Registration
