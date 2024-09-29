import Image from "next/image";
const SideBarCard = ({ product, pricePerProduct, amount, onClick }) => {
  return (
    <div className='listing'>
      <Image
        alt='Product image in sidebar'
        src={product.image}
        width={50}
        height={50}
        unoptimized
      />
      <p>{"amount: " + amount}</p>
      <p>{pricePerProduct + " €"}</p>
      <button onClick={() => onClick(product)}>-</button>
    </div>
  );
};

export default SideBarCard;
