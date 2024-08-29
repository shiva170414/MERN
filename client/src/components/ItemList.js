import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ setCurrentItem }) => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const res = await axios.get('/api/items');
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`/api/items/${id}`);
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => setCurrentItem(item)}>Edit</button>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
