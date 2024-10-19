'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '@/app/graphql/queries';
import UpdateItemForm from './UpdateItemForm';
import DeleteItemButton from './DeleteItemButton';
import { GetCountriesData } from '@/app/graphql/types';

const ItemList: React.FC = () => {
  const { loading, error, data } = useQuery<GetCountriesData>(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.getCountries.map((item) => (
        <li key={item.id}>
          {item.name} - {item.code}
          <UpdateItemForm item={item} />
          <DeleteItemButton id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
