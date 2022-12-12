import React from 'react'
import { useParams } from 'react-router-dom'
import PublicPost from '../components/PublicPost'
import MatchingIDPost from '../components/MatchingIDPost'
import { useLoginContext } from '../utils/context/loginContext'

import { useQuery } from '@apollo/client'
import { GET_SINGLE_POST } from '../utils/queries'


function Post() {
  const [loginState] = useLoginContext()
  console.log(loginState)
  let { postId } = useParams()
 
  const {data, loading} = useQuery(GET_SINGLE_POST, {
    variables: {id: postId}
  })
  if (loading) {
    return (
      <h1>LOADING be patient, bitch</h1>
    )
  }
  let loggedInUser = loginState.username || ""
  let postUser = data?.post.postUser || ""

  return (loggedInUser === postUser) ? (
    <MatchingIDPost />
  ) : (
    <PublicPost />
  )
}

export default Post