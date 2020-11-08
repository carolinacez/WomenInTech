import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query  {
    products {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

export const QUERY_USER = gql`
{
  user {
    username
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;