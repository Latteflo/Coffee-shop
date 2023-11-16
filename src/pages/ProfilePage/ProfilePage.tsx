import React from "react"
import { useUser } from "../../components/UserContext/UserContext"
import { useNavigate } from "react-router-dom"
import { signOut } from 'firebase/auth';
import { Auth } from "../../api/firebase"
import "../../index.css"
import "./profile.css"

const ProfilePage: React.FC = () => {
  const { user } = useUser()
  const navigate = useNavigate()

  if (!user) {
    return <div>Loading...</div>
  }

  const goToShop = () => {
    navigate('/categories'); 
  };

  const logOut = async () => {
    try {

      await signOut(Auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <div className="profile-container">
      <h1>
        Hello {user.displayName || "Beloved Coffee Lover"}! 
        <br/>
        Welcome to your profile page!
      </h1>
      <p> Your email is: {user.email}</p>
      <div className="buttons">
        <button onClick={goToShop}>Go to shop</button> 
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  )
}

export default ProfilePage
