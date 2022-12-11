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
      postTitle
      postCategory
      postText
      postUser
      createdAt
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

export const GET_POSTS = gql`
  query posts {
    posts {
      PostTitle
      PostCategory
      PostText
      PostUser
      createdAt
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      category
      posts
    }
  }
`;
