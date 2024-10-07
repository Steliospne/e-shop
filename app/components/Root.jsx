"use client";
import { useState, useEffect } from "react";
import { useCart } from "./Cart";
import CartIcon from "./CartIcon";

const Root = ({ children, sidebar, navbar }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [dark, isDark] = useState(true);
  useEffect(() => {
    if (!dark) document.documentElement.setAttribute("theme", "light");
    else document.documentElement.setAttribute("theme", "dark");
  }, [dark]);
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
            <CartIcon dark={dark} />
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
