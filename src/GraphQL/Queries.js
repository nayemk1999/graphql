import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
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