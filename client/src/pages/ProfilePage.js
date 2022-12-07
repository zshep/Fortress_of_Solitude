import React from "react";
// import { useLoginContext } from '../utils/LoginContext'
import Auth from "../utils/auth";
import ProfileBox from "../components/ProfileBox";

function ProfilePage() {
  return Auth.loggedIn() ? (
    <ProfileBox />
  ) : (
    console.log('log in or else')
  );
}

export default ProfilePage;
