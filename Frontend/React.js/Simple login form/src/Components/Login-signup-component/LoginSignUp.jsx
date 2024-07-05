import "./LoginSignUp.css";

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

export default function LoginSignUp() {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt=""></img>
                    <input type="text"></input>
                </div>
                <div className="input">
                    <img src={email_icon} alt=""></img>
                    <input type="email"></input>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""></img>
                    <input type="password"></input>
                </div>
            </div>
            <div className="forgot-password">
                Loss Password? <span>Click here!</span> 
            </div>
            <div className="submit-container">
                <div className="submit">Sign up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}