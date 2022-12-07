import React from 'react'
import { useLoginContext } from '../utils/LoginContext'
import ProfileBox from '../components/ProfileBox'

function ProfilePage() {
  const loggedIn = useLoginContext()
  console.log(loggedIn)
  return (
    <ProfileBox />
  )
}

export default ProfilePage
