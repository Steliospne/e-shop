import HomeContent from "./components/HomeContent";
import { headers } from "next/headers";

const Home = () => {
  const getUserAgent = () => {
    return headers().get("user-agent").toLocaleLowerCase();
  };

  const isMobile =
    getUserAgent().includes("android") || getUserAgent().includes("iphone");

  return <HomeContent isMobile={isMobile} />;
};

export default Home;
