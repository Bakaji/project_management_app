import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation ($input: AddProjectInputType!) {
    addProject(input: $input) {
      name
      description
      status
      client {
        name
        email
        phone
      }
    }
  }
`;

const EDIT_PROJECT = gql`
  mutation ($input: EditProjectInputType!) {
    editProject(input: $input) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation ($id: ID!) {
    deleteProject(id: $id) {
      name
      description
    }
  }
`;

export { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT };
