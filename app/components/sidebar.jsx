"use client";

import { useCart } from "./Cart";
import { useEffect, useState } from "react";
import SideBarCard from "./SideBarCard";
import { getPricePerItem, getTotal, roundWithTwoDec } from "../lib/utils";

const SideBar = () => {
  const { items, handleRemovingItems } = useCart();
  const [pricePerProduct, setPricePerProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const unique = [...new Set(items)];
  useEffect(() => {
    const calculatedPricePerProduct = getPricePerItem(items, unique);
    setPricePerProduct(calculatedPricePerProduct);

    const calculatedTotal = calculatedPricePerProduct
      ? getTotal(calculatedPricePerProduct)
      : 0;
    setTotal(calculatedTotal);
  }, [items]);

  const handleProductPrice = (product) => {
    if (pricePerProduct)
      return roundWithTwoDec(
        pricePerProduct.find((item) => item.id === product.id)?.amount
      );
  };

  const handleProductAmount = (product) =>
    items.filter((item) => item.id === product.id).length;

  return (
    <div className='cart'>
      {unique &&
        unique.map((product) => (
          <SideBarCard
            key={product.id}
            product={product}
            amount={handleProductAmount(product)}
            pricePerProduct={handleProductPrice(product)}
            onClick={handleRemovingItems}
          />
        ))}
      <p>{"Total: " + roundWithTwoDec(total) + " €"}</p>
    </div>
  );
};

export default SideBar;
