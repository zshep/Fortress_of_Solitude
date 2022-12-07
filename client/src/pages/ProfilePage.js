import React from 'react'
import { useLoginContext } from '../utils/LoginContext'
import ProfileBox from '../components/ProfileBox'

function ProfilePage() {
  const [state, dispatch] = useLoginContext()
  console.log(state.isLoggedIn)
  return (
    <ProfileBox />
  )
}

export default ProfilePage
