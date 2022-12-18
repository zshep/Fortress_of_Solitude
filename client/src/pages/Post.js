import React from 'react'
import { useParams } from 'react-router-dom'
import PublicPost from '../components/PublicPost/PublicPost'
import MatchingIDPost from '../components/MyPost/MatchingIDPost.js'
import GoblinState from '../utils/localStorage'
import Loader from "../components/Loader"

import { useQuery } from '@apollo/client'
import { GET_SINGLE_POST } from '../utils/queries'


function Post() {
  let { postId } = useParams()
  const loggedInGoblin = new GoblinState().getLoginState()
 
  const {data, loading} = useQuery(GET_SINGLE_POST, {
    variables: {id: postId}
  })
  if (loading) {
    return (
      <Loader/>
    )
  }
  if (loggedInGoblin === null) {
    return (<PublicPost />)
  }

  let loggedInUser = loggedInGoblin.username
  let postUser = data?.post.postUser || ""

  return (loggedInUser === postUser) ? (
    <MatchingIDPost />
  ) : (
    <PublicPost />
  )
}

export default Post