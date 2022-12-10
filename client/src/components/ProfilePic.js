import React from 'react'
import styled from 'styled-components'
import wood from './wood.png'

const StyledProfilePic = styled.div`
    border: 1px solid grey;
	height: 100px;
	width: 100px;

	border-radius: 10px  10px 10px 10px;
	background-image: url(${wood});
	box-shadow: 5px 5px 5px grey;
`;

function ProfilePic() {
  return (
    <StyledProfilePic />
  )
}

export default ProfilePic