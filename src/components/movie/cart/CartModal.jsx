import { useContext } from "react";
import { CartContext } from "../../../contexts";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import CheckoutIcon from "../../../assets/icons/checkout.svg";

const CartModal = ({ onClose }) => {
  const { data } = useContext(CartContext);

  // short jsx
  const cartList =
    data.cartData.length > 0 ? (
      data.cartData.map((movie) => <CartItem key={movie.id} movie={movie} />)
    ) : (
      <EmptyCart />
    );

  // view
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {cartList}
          </div>
          <div className="flex items-center justify-end gap-2">
            {data.cartData.length > 0 && (
              <a
                className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                href="#"
              >
                <img src={CheckoutIcon} width="24" height="24" alt="" />
                <span>Checkout</span>
              </a>
            )}

            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
              onClick={onClose}
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
