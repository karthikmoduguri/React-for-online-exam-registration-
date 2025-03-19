import  { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    //const navigate=useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        setError("");
        setLoading(true);
    
        try {
          const response = await axios.post("/api/v1/user/login", {email,password}, {
            withCredentials: true,
          })
    
          console.log("Login Response:", response.data);
          console.log('hey') // ✅ Debug log
          if (response.data && response.data.user) {
            const { message, user } = response.data;
            const { _id, name, email, role, token } = user;
          
            console.log(message); // "Login successful"
            console.log(_id); // "67c8066987ddf5050458ea73"
            console.log(name); // "Sai Sourya"
            console.log(email); // "saisourya678@gmail.com"
            console.log(role); // "user"
            console.log(token); // JWT Token
          } else {
            console.log("Invalid response format");
          }
          
    
          alert(`Welcome, ${response.data.user.name}!`);
    
          // ✅ Redirect based on role
         
        } catch (error) {
            alert('invalid id or pass')
          console.error("Login Error:", error.response?.data || error);
          setError(error.response?.data?.message || "Something went wrong");
        } finally {
          setLoading(false);
        }
    };
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     setLoading(true);
    
    //     try {
    //       const response = await axios.post("/api/v1/user/login", loginDetails, {
    //         withCredentials: true,
    //       });
    
    //       console.log("Login Response:", response.data); // ✅ Debug log
    
    //       // ✅ Corrected destructuring
    //       const user = response.data.data; // Correct user data extraction
    //       const token = response.data.token || null; // Handle missing token
    
    //       // ✅ Store user & token safely
    //       localStorage.setItem("user", JSON.stringify(user));
    //       if (token) {
    //         localStorage.setItem("token", token);
    //       }
    
    //       alert(`Welcome, ${user.name}!`);
    
    //       // ✅ Redirect based on role
         
    //     } catch (error) {
    //       console.error("Login Error:", error.response?.data || error);
    //       setError(error.response?.data?.message || "Something went wrong");
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f4f4f4" }}>
            <div style={{ padding: "20px", borderRadius: "8px", background: "white", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", width: "300px" }}>
                <h1 className="text-3xl">LOGIN FORM</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter email"
                            style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "15px", position: "relative" }}>
                        <label>Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter password"
                            style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "60%",
                                transform: "translateY(-50%)",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                color: "#007BFF",
                            }}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button type="submit" style={{ width: "100%", padding: "10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
