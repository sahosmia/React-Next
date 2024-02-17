import logo from "../assets/logo.svg";
import ringIcon from "../assets/ring.svg";
import sunIcon from "../assets/icons/sun.svg";
import cartIcon from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartModal from "./movie/cart/CartModal";
import { CartContext } from "../contexts";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const { data } = useContext(CartContext);

  return (
    <>
      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ringIcon} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={sunIcon} width="24" height="24" alt="sun" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setShowCartModal(true)}
              >
                <img src={cartIcon} width="24" height="24" alt="cart" />
                <span className="rounded-full absolute top-[-5px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[20px] h-[20px] text-sm flex justify-center items-center">
                  {data.cartData.length}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
