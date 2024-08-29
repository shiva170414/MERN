import React, { useState, useEffect } from 'react';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  // Define getItems function
  const getItems = async () => {
    try {
      const res = await axios.get('/api/items');
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <CreateItem getItems={getItems} currentItem={currentItem} />
      <ItemList items={items} setCurrentItem={setCurrentItem} getItems={getItems} />
    </div>
  );
};

export default App;