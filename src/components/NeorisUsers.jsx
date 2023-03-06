import React, { useEffect, useState } from "react";
export const NeorisUsers = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const resp = await fetch(url);
    const data = await resp.json();
    setItems(data);
  };

  return (
    <>
      <h1>Items</h1>
      {items.map((user) => (
        <div className="card">
          <ul>
            <li>{user.userId}</li>
            <li>{user.title}</li>
            <li>{user.completed.toString()}</li>
          </ul>
        </div>
      ))}
    </>
  );
};
