/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Rating from "./Rating";
import TagIcon from "../../assets/tag.svg";
import { getImage } from "../../utils/cine-utility";
import MovieDetails from "./MovieDetails";
import { CartContext } from "../../contexts";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const { data, dispatch } = useContext(CartContext);

  const handleAddtoCart = (e) => {
    e.stopPropagation();
    const movieExist = data.cartData.find((item) => item.id === movie.id);
    if (!movieExist) {
      dispatch({
        type: "add-to-cart",
        movie,
      });
      toast.success("This movie is added successfuly in your cart");
    } else {
      toast.error("This movie is already exist in your cart");
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetails movie={movie} onClose={() => setShowModal(false)} />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => setShowModal(true)}>
          <img
            className="w-full object-cover"
            src={getImage(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.description}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <span
              onClick={handleAddtoCart}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <img src={TagIcon} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </span>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
