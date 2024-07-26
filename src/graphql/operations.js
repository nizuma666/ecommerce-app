// src/graphql/operations.js
import { gql } from '@apollo/client/core'

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      products {
        id
        name
        price
      }
      subcategories {
        id
        name
        products {
          id
          name
          price
        }
        subcategories {
          id
          name
        }
      }
    }
  }
`

export const INSERT_CATEGORIES = gql`
  mutation InsertCategories($name: String!) {
    insert_categories(name: $name) {
      name
    }
  }
`

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $price: Float!, $categoryId: ID!) {
    addProduct(name: $name, price: $price, categoryId: $categoryId) {
      id
      name
      price
    }
  }
`

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: ID!, $name: String!) {
    updateCategory(id: $id, name: $name) {
      id
      name
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $name: String!, $price: Float!) {
    updateProduct(id: $id, name: $name, price: $price) {
      id
      name
      price
    }
  }
`

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: ID!) {
    deleteCategory(id: $id)
  }
`

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`
