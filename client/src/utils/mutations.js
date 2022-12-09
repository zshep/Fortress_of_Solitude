import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation login($email: String, $password: String) {
    createNewUser(email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($password: String!, $email: String!) {
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


export const CREATE_CATEGORY = gql`
  mutation createCategory($category: String!) {
    createCategory(category: $category) {
      category
    }
  }
`

export const CREATE_JOB = gql`
  mutation createJob($jobData: jobData!) {
    createJob(jobData: $jobData) {
      postTitle
      createdAt
    }
  }
`;

export const ACCEPT_JOB = gql`
  mutation acceptJob($jobData: jobData!) {
    acceptJob(jobData: $jobData) {
      postTitle
    }
  }
`;

export const COMPLETE_JOB = gql`
 mutation completeJob($jobData: jobData!) {
    completeJob(jobData: $jobData) {
      postTitle
    }
  }
`;


export const DELETE_JOB = gql`
mutation deleteJob($jobData: jobData!) {
    deleteJob(jobData: $jobData) {
      postTitle
    }
  }
`;

export const EDIT_JOB = gql`
mutation editJob($jobData: jobData!) {
    editJob(jobData: $jobData) {
      postTitle
    }
  }
`;
