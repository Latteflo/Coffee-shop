import React from "react";
import { useUser } from "../../components/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { Auth } from "../../api/firebase";
import "./profile.css";

const ProfilePage: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <div className="loading">Loading...</div>;
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
      <div className="profile-header">
        <h1>Welcome, {user.displayName || "Beloved Coffee Lover"}!</h1>
        <p>Your email: {user.email}</p>
      </div>
      <div className="profile-actions">
        <button className="btn" onClick={goToShop}>Go to Shop</button> 
        <button className="btn" onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};

export default ProfilePage;
