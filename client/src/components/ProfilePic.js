import React from 'react'
import styled from 'styled-components'
import goblinOne from './goblin1.jpg'

const StyledProfilePic = styled.img`
    border: 1px solid grey;
	height: 200px;
	width: 200px;

	border-radius: 10px  10px 10px 10px;
	box-shadow: 5px 5px 5px grey;
`;

function ProfilePic() {
  return (
    <StyledProfilePic src={goblinOne} alt="My Goblin" />
  )
}

export default ProfilePic