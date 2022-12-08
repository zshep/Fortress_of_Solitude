import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    getMe {
      _id
      username
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      PostTitle
      PostCategory
      PostText
      PostUser
      createdAt
    }
  }
`
