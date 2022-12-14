import React from "react";
import Auth from "../utils/auth";
import ProfileBox from "../components/Profile/ProfileBox";

// function ProfilePage() {
//   return (
//     <ProfileBox />
//   ) 
// }

function ProfilePage() {
  return Auth.loggedIn() ? (
    <ProfileBox />
  ) : (
    window.location.assign('/')
  );
}

export default ProfilePage;
