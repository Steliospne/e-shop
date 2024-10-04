import DarkIcon from "@/app/assets/icons/dark.svg";
import LightIcon from "@/app/assets/icons/light.svg";
import Image from "next/image";

const ThemeIcon = ({ dark }) => {
  return (
    <Image
      style={{ filter: dark ? "invert(1)" : "" }}
      src={dark ? DarkIcon.src : LightIcon.src}
      width={24}
      height={24}
      alt='dark theme icon'
    />
  );
};

export default ThemeIcon;
