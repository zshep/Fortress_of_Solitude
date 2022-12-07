import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Login($email: String, $password: String) {
    createNewUser(email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;
