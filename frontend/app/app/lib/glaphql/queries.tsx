// graphql/queries.ts
import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;
