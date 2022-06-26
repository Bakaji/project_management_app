import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  {
    allProjects {
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

const GET_PROJECT_BY_ID = gql`
  query ($id: ID!) {
    project(id: $id) {
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

export { GET_PROJECTS, GET_PROJECT_BY_ID };
