import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAcc = async (e) => {
    e.preventDefault();
    if (username.length == 0 || email.length == 0 || password.length == 0) {
      alert("All fields must be filled");
    } else if (username.length <= 3 || password <= 4) {
      alert("Email or password are too short");
    } else 
      try {
        await axios.post("http://localhost:5000/users/", {
          username: username,
          email: email,
          password: password,
        });
        document.getElementById("user").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      } catch (err) {
        console.error(err)
    }
  };

  return (
    <div className="register">
      <form autoComplete="off">
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="user"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit" onClick={createAcc} id="buttonLogin">
          Create Account
        </button>
        <br />
        <a href="/" id="link">
          Already have an account? Log in here
        </a>
      </form>
    </div>
  );
};

export default Register;
