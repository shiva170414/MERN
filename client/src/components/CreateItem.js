import React, { useState } from 'react';
import axios from 'axios';

const CreateItem = ({ getItems, currentItem }) => {
  const [name, setName] = useState(currentItem?.name || '');
  const [description, setDescription] = useState(currentItem?.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentItem) {
      await axios.put(`/api/items/${currentItem._id}`, { name, description });
    } else {
      await axios.post('/api/items', { name, description });
    }
    getItems();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <br></br>
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateItem;
