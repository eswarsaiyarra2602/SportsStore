import React, { useState } from 'react'
import './LoginSignUp.css';
export const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up");
    
  return (
    <div className="wrapped">
        <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Sign Up" ?
            <div className="input">
                <i className="fa-solid fa-user"></i>
                <input type='text' placeholder="Name" />
            </div> : <></>
            }
            <div className="input">
                <i class="fa-solid fa-envelope"></i>
                <input type='email' placeholder='Email' />
            </div>
            <div className="input">
                <i class="fa-solid fa-key"></i>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action === "Login" ? <div className="forgot-password">Lost Password? <span>Click Here!</span></div> : <></> }
        <div className="submit-container">
            <div className={action==="Login" ? "submit gray" :"submit" } onClick={()=>setAction("Sign Up")}>Sign Up</div>
            <div className={action==="Sign Up" ? "submit gray" :"submit" } onClick={()=>setAction("Login")}>Login</div>
        </div>
    </div>
    </div>
  )
}
