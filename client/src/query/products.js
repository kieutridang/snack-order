import gql from 'graphql-tag';

export const getProducts = gql`
  query {
    products {
      id
      name
      price
    }
  }
`;

export const getProduct = gql`
  query Product($id: String!) {
    product(id: $id) {
      id
      name
      price
    }
  }
`;

export default {
  getProducts,
  getProduct,
};
