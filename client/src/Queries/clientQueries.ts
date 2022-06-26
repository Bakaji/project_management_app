import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  {
    allClients {
      id
      name
      email
      phone
    }
  }
`;
const GET_CLIENT_BY_ID = gql`
  query ($id: ID!) {
    client(id: $id) {
      name
      email
      phone
    }
  }
`;
export { GET_CLIENTS, GET_CLIENT_BY_ID };
