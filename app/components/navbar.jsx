"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeIcon from "./ThemeIcon";
const NavBar = () => {
  const router = useRouter();

  const handleNavigation = (url) => {
    router.push(url);
  };

  const pathname = usePathname();
  const home = "/";
  const shop = "/shop";

  const [dark, isDark] = useState(true);

  useEffect(() => {
    if (!dark) document.documentElement.setAttribute("theme", "light");
    else document.documentElement.setAttribute("theme", "dark");
  }, [dark]);

  return (
    <>
      <button
        className={`home-btn ${pathname === home ? "active" : ""}`}
        onClick={() => handleNavigation(home)}
      >
        Home
      </button>
      <button
        className={`shop-btn ${pathname === shop ? "active" : ""}`}
        onClick={() => handleNavigation(shop)}
      >
        Shop
      </button>
      <button className='theme-btn' onClick={() => isDark(!dark)}>
        <ThemeIcon dark={dark} />
        Theme
      </button>
    </>
  );
};

export default NavBar;
