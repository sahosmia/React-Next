import Image from "next/image";
import Link from "next/link";
import SoppingCartImg from "@/public/svg/shopping-Cart.svg";
import MenuImg from "@/public/svg/menu.svg";
import AvatarImg from "@/public/svg/avatar.svg";
import BlackLogo from "@/public/lws-logo-black.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src={MenuImg}
            className="lg:hidden w-5 h-5"
            alt=""
            width={100}
            height={100}
          />
          <Link href="/">
            <Image
              src={BlackLogo}
              className="h-10"
              alt=""
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={AvatarImg}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
          width={100}
          height={100}
        />
        <Image
          src={SoppingCartImg}
          className="block w-5 h-5"
          alt="shopping cart icon"
          width={100}
          height={100}
        />
      </div>
    </nav>
  );
};

export default Navbar;
