import logo from "../assets/logo.svg";
import ringIcon from "../assets/ring.svg";
import sunIcon from "../assets/icons/sun.svg";
import cartIcon from "../assets/shopping-cart.svg";
import { useState } from "react";
import CartModal from "./CartModal";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const handleCartShow = () => {
    setShowCartModal(true);
  };

  const handleCartClose = () => {
    setShowCartModal(false);
  };
  return (
    <>
      {showCartModal && <CartModal onClose={handleCartClose} />}
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
                onClick={handleCartShow}
              >
                <img src={cartIcon} width="24" height="24" alt="cart" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
