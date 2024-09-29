"use client";
import { useRouter, usePathname } from "next/navigation";
const NavBar = () => {
  const router = useRouter();

  const handleNavigation = (url) => {
    router.push(url);
  };

  const pathname = usePathname();
  const home = "/";
  const shop = "/shop";

  return (
    <>
      <button
        className={`home btn ${pathname === home ? "active" : ""}`}
        onClick={() => handleNavigation(home)}
      >
        Home
      </button>
      <button
        className={`shop btn ${pathname === shop ? "active" : ""}`}
        onClick={() => handleNavigation(shop)}
      >
        Shop
      </button>
    </>
  );
};

export default NavBar;
