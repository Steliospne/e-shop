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
      <p>{amount === 1 ? amount + " piece" : amount + " pieces"}</p>
      <p>{pricePerProduct + " €"}</p>
      <button className='remove-btn' onClick={() => onClick(product)}>
        -
      </button>
    </div>
  );
};

export default SideBarCard;
