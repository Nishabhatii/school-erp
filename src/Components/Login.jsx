import  { useState } from "react";
import './login.css'
export default function Login(){
    const [email,setEmail]=useState("");
    const [passward,SetPassward]=useState('')
    

    const HandleLogin=(e)=>{
        e.preventDefault();
        if (email&& passward) {
            window.location.href="/dashboard";

            
        }else{
            alert("incorrect information")
        }
    }
    return(
<div className="login">
    <h1>XYZ public school,Faridabad</h1>
    <br></br>
<form className="login-form" onSubmitCapture={HandleLogin}>
    <h2>Student Login</h2>
    
    <input type="email" placeholder="enter your email" value={email}
     onChange={(e)=>setEmail(e.target.value)}/> 
    <input type="password" placeholder="enter your passward" value={passward}
     onChange={(e)=>SetPassward(e.target.value)}/> 
     <h4>Use DOB as your passward in format DDMMYY </h4>
     <button type="submit">Login</button>
</form>
</div>
    )
}