import React from "react"
import { useUser } from "../../components/UserContext/UserContext"
import "../../index.css"
import "./profile.css"

const ProfilePage: React.FC = () => {
  const { user } = useUser()

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="profile-container">
      <h1>
        Hello {user.displayName || "Beloved Coffee Lover"}! Welcome to your
        profile page!
      </h1>
      <p> Your email is: {user.email}</p>
    </div>
  )
}

export default ProfilePage
