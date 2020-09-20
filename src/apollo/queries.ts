import { gql } from "@apollo/client";

export const getCharacters = gql`
  query {
    characters {
      results {
        name
        status
        species
        image
        type
        gender
      }
    }
  }
`;
