import React from "react";
import '../css/Register.css'

const Register = () => {
    
    return (
        <div className="register-container">
          <h1>Register</h1>
          <form className="register-form">
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Register</button>
          </form>
        </div>
      );
};

export default Register;