"use client";
import Card from "./Card";

const Product = ({ data }) => {
  return (
    <>
      {data &&
        data.map((product) => <Card key={product.id} product={product} />)}
    </>
  );
};

export default Product;
