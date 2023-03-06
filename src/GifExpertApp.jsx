import React, { useEffect } from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);
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

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
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
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(value) => {
          onAddCategory(value);
        }}
      />
      <button onClick={onAddCategory}>Agregar</button>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
