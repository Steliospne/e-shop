import { Suspense } from "react";
import LoadingSkeleton from "./loading";

const ShopLayout = ({ children }) => {
  return <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>;
};

export default ShopLayout;
