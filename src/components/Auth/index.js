import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import "./index.css";
import { useNavigate } from 'react-router-dom';
export default function Index() {
 
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
const[loading,setLoading]=useState()
 
  const navigate = useNavigate();
 
  const handlesignInGoolge=()=>{
    signInWithPopup(auth,provider).then((res)=>{
      navigate("/");
      console.log(res)
    })
  }
  const handleSignIn = () => {
    setError();
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    }  else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setLoading(false);
          navigate("/");
           console.log(res);
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  const handleRegister = (e) => {
   
    setError("");
    setLoading(false);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    }  else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
           console.log(res);          
          setLoading(false);
          navigate("/");

        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  return (
    <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services. </p>
        <div className="sign-options">
          <div onClick={handlesignInGoolge} className="single-option">
            <img              
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
              alt="google"
            />
            <p>Login with Google"</p>
          </div>

        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (<div>
              <div className="input-field">
                <p >Username</p>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
              </div>

              <div className="input-field">
                <p>Email</p>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
              </div>

              <div className="input-field">
                <p>Password</p>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
              </div>

              <button onClick={handleRegister} 
              style={{ marginTop: "10px" }}>
              Register</button> 
              </div>
              ) : (
              <div>
              <div className="input-field">
              <p>Email</p>
              <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
            </div>

            <div className="input-field">
              <p>Password</p>
              <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
            </div>
                <button 
                onClick={handleSignIn}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Login
                </button>
              </div>
            )}
            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",

            }}>{register ? "login": "register"}?</p>
          </div>
        </div>
        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>)}
      </div>
    </div>
  )
}       