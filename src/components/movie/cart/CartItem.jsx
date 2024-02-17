/* eslint-disable react/prop-types */
import { useContext } from "react";
import DeleteIcon from "../../../assets/delete.svg";
import { CartContext } from "../../../contexts";
import { toast } from "react-toastify";

const CartItem = ({ movie }) => {
  const { data, dispatch } = useContext(CartContext);
  const handleDeletetoCart = (id) => {
    // const movies = data.cartData.filter((item) => item.id !== id);
    dispatch({
      type: "remove-to-cart",
      id,
    });
    toast.success("This movie is deleted successfuly in your cart");
  };
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div className="flex items-center gap-4">
        <img
          className="rounded overflow-hidden"
          src="/assets/cart-item.png"
          alt=""
        />
        <div>
          <h3 className="text-base md:text-xl font-bold">{movie.title}</h3>
          <p className="max-md:text-xs text-[#575A6E]">{movie.description}</p>
          <span className="max-md:text-xs">${movie.price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button
          onClick={() => handleDeletetoCart(movie.id)}
          className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
        >
          <img className="w-5 h-5" src={DeleteIcon} alt="" />
          <span className="max-md:hidden">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
