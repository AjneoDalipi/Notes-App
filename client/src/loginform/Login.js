import { useState } from "react";
import axios from "axios";
import "./login.css"

const Login = () => {

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const login = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/login", {
              email: email,
              password: password,
            });
            document.getElementById("email").value='';
            document.getElementById("pass").value='';
            
          } catch (err) {
            console.log(err);
          }
        };

    return(
        <div className="login">
            <form autoComplete="off">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" 
                onChange={(e) => {setEmail(e.target.value); }}/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="pass" placeholder="Password" required
                onChange={(e) => {setPassword(e.target.value); }}/>
                <br />  
                <button type="submit" onSubmit={login} id="buttonLogin">Log In</button>
                <br />
                <a href="/register" id="link"> Don't have an account? Register here! </a>
            </form>
        </div>
    )
};

export default Login;