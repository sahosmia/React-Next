import BookThumbanil from "./BookThumbanil";
import Rating from "./Rating";
import AddToCartButton from "./button/AddToCartButton";
import FavouriteButton from "./button/FavouriteButton";
import UnFavouriteButton from "./button/UnFavouriteButton";

const Book = ({ book, favouriteClicked }) => {
  const { id, bookName, thumbnail, author, price, rating, favorite } = book;
  return (
    <div className="space-y-3">
      <BookThumbanil thumbnail={thumbnail} />

      {/* info */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{bookName}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
          <Rating rating={rating} />
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <AddToCartButton />

          {favorite === false ? (
            <UnFavouriteButton id={id} favouriteClicked={favouriteClicked} />
          ) : (
            <FavouriteButton id={id} favouriteClicked={favouriteClicked} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
