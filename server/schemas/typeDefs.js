const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    products: [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    user: [User]
    checkout(products:[ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth 
    addProduct(name: String! description: String! image: String! price: Float!): Product
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

