import { gql } from "@apollo/client";

export const dataa = gql`
query {
    characters{
      info {
        count
      }
      results {
        name
        id
        status
        episode{
          episode
        }
        location{
      name
    }
      }
    }
  }
`;