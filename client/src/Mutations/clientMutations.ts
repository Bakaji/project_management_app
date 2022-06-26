import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation ($input: AddClientInputType!) {
    addClient(input: $input) {
      id
      name
      email
      phone
    }
  }
`;
const EDIT_CLIENT = gql`
  mutation ($input: EditClientInputType!) {
    editClient(input: $input) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation ($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_CLIENT, EDIT_CLIENT, DELETE_CLIENT };
