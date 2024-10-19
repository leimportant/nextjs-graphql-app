import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query getCountries {
    getCountries {
      id
      name
      code
    }
  }
`;

export const CREATE_COUNTRIES= gql`
  mutation CreateCountries($countries: [CountryInput!]!) {
    createCountries(countries: $countries) {
      id
      name
      code
    }
  }
`;

export const CREATE_COUNTRY = gql`
  mutation CreateCountry($id: String!, $name: String!, $code: String!) {
    createCountry(id: $id, name: $name, code: $code) {
      id
      name
      code
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation UpdateCountry($id: ID!, $name: String!, $code: String!) {
    updateCountry(id: $id, name: $name, code: $code) {
      id
      name
      code
    }
  }
`;

export const DELETE_COUNTRY = gql`
  mutation DeleteCountry($id: ID!) {
    deleteCountry(id: $id) {
      id
      name
      code
    }
  }
`;
