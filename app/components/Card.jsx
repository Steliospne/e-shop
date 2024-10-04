"use client";
import Image from "next/image";
import { useCart } from "./Cart";
import { useState } from "react";
const Card = ({ product }) => {
  const { items, handleAddingItems } = useCart();
  const [amount, setAmount] = useState(1);
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value[0] === "0" && value[1]) {
      e.target.value = 0;
      return;
    }

    setAmount(+e.target.value);
  };

  const handleClick = (product) => {
    if (!amount) {
      return;
    }
    if (amount === 1) {
      handleAddingItems(product);
      setAmount(1);
      return;
    }
    let multipleItems = [];
    for (let i = 0; i < amount; i++) {
      multipleItems.push(product);
    }
    handleAddingItems(multipleItems);
    setAmount(1);
    multipleItems = [];
  };

  return (
    <div className='card'>
      <Image
        className='card-img'
        alt='Product image'
        width={50}
        height={50}
        src={product.image}
        unoptimized
      />
      <div className='details'>
        <p>{product.title}</p>
        <p>{product.price + " €"}</p>
        <div className='btnWrapper'>
          <label htmlFor={"amount" + product.id}>
            {amount === 1 ? "Piece: " : "Pieces: "}
            <input
              value={amount}
              type='number'
              min={0}
              name={"amount" + product.id}
              id={"amount" + product.id}
              onChange={handleInputChange}
            />
          </label>
          <button
            className='add-btn'
            onClick={() => {
              handleClick(product);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
