'use client';

import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_COUNTRY, GET_COUNTRIES } from '@/app/graphql/queries';

interface DeleteItemButtonProps {
  id: string;
}

const DeleteItemButton: React.FC<DeleteItemButtonProps> = ({ id }) => {
  const [deleteCountry] = useMutation(DELETE_COUNTRY);

  const handleDelete = async () => {
    try {
      await deleteCountry({
        variables: { id },
        refetchQueries: [{ query: GET_COUNTRIES }],
      });
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteItemButton;
