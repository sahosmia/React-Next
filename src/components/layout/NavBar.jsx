import logo from "/src/assets/lws-logo-en.svg";
import { AiOutlineBell, AiOutlineHeart } from "react-icons/ai";


const NavBar = () => {
  return (
    <nav className="py-6 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        {/* Logo */}
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={logo}
            alt="Lws"
          />
        </a>
        {/* Logo Ends  */}

        <div className="flex">
          <AiOutlineHeart className="w-5 h-5" />
          {/* Notification  */}
          <AiOutlineBell className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
