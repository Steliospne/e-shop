"use client";
import { useState } from "react";
import { useCart } from "./Cart";

const Root = ({ children, sidebar, navbar }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { items } = useCart();
  return (
    <>
      <nav className='navbar'>
        <div>
          {navbar}
          <button
            className='menu-btn'
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Menu
          </button>
          <div className='cart-bubble'>{items.length}</div>
        </div>
      </nav>
      <main>{children}</main>
      <nav className={isCollapsed ? "sidebar" : "sidebar open"}>{sidebar}</nav>
    </>
  );
};

export default Root;
