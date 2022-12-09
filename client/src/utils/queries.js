import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    getMe {
      _id
      username
    }
  }
`;

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
