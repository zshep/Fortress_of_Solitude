import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    getMe {
      _id
      username
      posts {
        _id
        postCategory 
        postText
        postTitle
        postUser
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postTitle
      postCategory
      postText
      postUser
      createdAt
    }
  }
`

export const GET_ME_AND_SINGLE_POST = gql`
  query post($id: ID!){
    post(_id: $id) {
      postTitle
      postCategory
      postText
      postUser
      createdAt
    }
    getMe {
      username
    }
  }
`

export const GET_USERS = gql`
  query users {
    users {
      username
    }
  }
`;

export const GET_SINGLE_USERNAME = gql`
  query user($_id: ID!)  {
    user(_id: $_id) {
      username
    }
  }
`;

export const GET_CATS_AND_LOGGEDIN_USER = gql `
  query user($_id: ID!)  {
    user(_id: $_id) {
      username
    }
    categories {
      category
    }
  }
`

export const GET_POSTS = gql`
  query getPosts {
    posts {
      _id
      postTitle
      postCategory
      postText
      postUser
      createdAt
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      category
    }
  }
`;
