import "./LoginSignUp.css";

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

import { useState } from "react";

export default function LoginSignUp() {
    const [action, setAction] = useState("Sign Up")
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" && <div className="input">
                    <img src={user_icon} alt=""></img>
                    <input type="text" placeholder="Name"></input>
                </div>} 
      
                <div className="input">
                    <img src={email_icon} alt=""></img>
                    <input type="email" placeholder="Email Id"></input>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""></img>
                    <input type="password" placeholder="Password"></input>
                </div>
            </div>
            {action === "Login" && <div className="forgot-password">
                Loss Password? <span>Click here!</span> 
            </div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>
        </div>
    )
}