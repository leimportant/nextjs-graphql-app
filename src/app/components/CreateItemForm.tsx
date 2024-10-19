'use client';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_COUNTRIES, GET_COUNTRIES } from '@/app/graphql/queries';
import { CreateCountriesData, CreateCountryVars, GetCountriesData } from '@/app/graphql/types';

const CreateCountryForm: React.FC = () => {
  const [id, setID] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const [createCountries] = useMutation<CreateCountriesData, { countries: CreateCountryVars[] }>(CREATE_COUNTRIES, {
    update(cache, { data }) {
      const existingCountries = cache.readQuery<GetCountriesData>({ query: GET_COUNTRIES });
      if (existingCountries && data) {
        cache.writeQuery({
          query: GET_COUNTRIES,
          data: { getCountries: [...existingCountries.getCountries, ...data.createCountries] },
        });
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!id || !name || !code) {
        console.error('ID, name, or code cannot be empty');
        return;
      }

      await createCountries({
        variables: {
          countries: [{ id, name, code }]
        },
      });

      setID('');
      setName('');
      setCode('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Id"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">Create Country</button>
    </form>
  );
};

export default CreateCountryForm;
