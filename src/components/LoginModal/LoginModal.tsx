import React, { useState } from "react"
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../api/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import "../../index.css"
import "./loginModal.css"
import { useNavigate  } from "react-router-dom"

const provider = new GoogleAuthProvider()

const LoginModal: React.FC<{ close: () => void }> = ({ close }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(Auth, email, password)
      console.log("Logged in successfully")
      navigate('/profile');
      close()
    } catch (error) {
      console.error("Error logging in:", error)
    }
  }

  const handleSignUp = async () => {
    if (password !== passwordConfirm) {
      console.error("Passwords do not match")
      return
    }
    try {
      await createUserWithEmailAndPassword(Auth, email, password)
      console.log("User account created")
      close()
    } catch (error) {
      console.error("Error signing up:", error)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(Auth, provider)
      close()
    } catch (error) {
      console.error("Error during Google Auth:", error)
    }
  }

  return (
    <div className="login-modal">
      <div className="login-container">
        <button className="close-button" onClick={close}>
          X
        </button>
        <h2>{isSignUp ? "Registration" : "Login"}</h2>
        <div className="form-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="styled-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="styled-input"
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="styled-input"
            />
          )}
        </div>
        <div className="action-buttons">
          {isSignUp ? (
            <button onClick={handleSignUp} className="styled-button">
              Sign Up
            </button>
          ) : (
            <button onClick={handleEmailLogin} className="styled-button">
              Login with Email
            </button>
          )}
          <button onClick={handleGoogleLogin} className="styled-button">
            Login with Google
          </button>
        </div>
        <p
          className={`switch-form ${
            isSignUp ? "accent-signup" : "accent-login"
          }`}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  )
}

export default LoginModal
