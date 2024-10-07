import Image from "next/image";
import cart from "@/app/assets/icons/cart-outline.svg";

const CartIcon = ({ dark }) => {
  return (
    <Image
      style={{ filter: dark ? "invert(1)" : "" }}
      src={cart.src}
      width={24}
      height={24}
      alt='cart icon'
    />
  );
};

export default CartIcon;
