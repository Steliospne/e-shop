"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useCart = () => {
  return useContext(Context);
};

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const handleAddingItems = (item) => {
    if (Array.isArray(item)) {
      setItems((prevItems) => [...prevItems, ...item]);
      return;
    }

    setItems([...items, item]);
  };

  const handleRemovingItems = (product) => {
    const itemToDelete = items.findIndex((item) => item.id === product.id);
    if (itemToDelete === 0) {
      const newItemsTail = items.slice(itemToDelete + 1);
      setItems([...newItemsTail]);
      return;
    }
    const newItemsHead = items.slice(0, itemToDelete);
    const newItemsTail = items.slice(itemToDelete + 1);
    setItems([...newItemsHead.concat(newItemsTail)]);
  };

  return (
    <Context.Provider value={{ items, handleAddingItems, handleRemovingItems }}>
      {children}
    </Context.Provider>
  );
};

export default CartProvider;
