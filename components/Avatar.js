import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <img
        className="translate-z-0 w-full h-full"
        src={"./img-cart.png"}
        width={737}
        height={678}
        alt=""
      />
    </div>
  );
};

export default Avatar;
