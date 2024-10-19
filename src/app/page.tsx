'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '@/app/lib/apolloClient';
import CreateItemForm from '@/app/components/CreateItemForm';
import ItemList from '@/app/components/ItemList';

const HomePage: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>CRUD Page with Next.js and GraphQL</h1>
        <CreateItemForm />
        <ItemList />
      </div>
    </ApolloProvider>
  );
};

export default HomePage;
