'use client';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_COUNTRY, GET_COUNTRIES } from '@/app/graphql/queries';

interface UpdateItemFormProps {
  item: {
    id: string;
    name: string;
    code: string;
  };
}

const UpdateItemForm: React.FC<UpdateItemFormProps> = ({ item }) => {
  const [id, setId] = useState(item.id);
  const [name, setName] = useState(item.name);
  const [code, setCode] = useState(item.code);

  const [updateItem] = useMutation(UPDATE_COUNTRY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateItem({
        variables: { id: item.id, name, code },
        refetchQueries: [{ query: GET_COUNTRIES }],
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItemForm;
