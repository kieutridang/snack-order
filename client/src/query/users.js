import gql from 'graphql-tag';

export const getUsers = gql`
  query {
    users {
      id
      username
    }
  }
`;

export default {
  getUsers,
};
