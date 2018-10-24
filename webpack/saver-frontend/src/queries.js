
import { gql } from "apollo-boost";

export const GET_COMPANIES = gql`
query {
  allCompanies {
    id
    name
    imgUrl
    description
    thumbnail
    
    products {
      title
    }
  }
}
`

export const GET_NAMES = gql`
  query {
    allNameses {
      id
      name
    }
  }
`;

export const ADD_NAME = gql`
  mutation createNames($name: String!) {
    createNames(name: $name) {
      name
      id
    }
  }
`;

export const DELETE_NAME = gql`
  mutation deleteNames($id: ID!) {
    deleteNames(id: $id) {
      name
      id
    }
  }
`;
