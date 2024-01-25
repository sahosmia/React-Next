import { useState } from "react";
import { bookLists } from "../data";
import Header from "./Header";
import BookListSection from "./BookListSection";

const MainSection = () => {
  const [books, setBooks] = useState(bookLists);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  const sortBy = (criteria) => {
    let sortedBooks = [...books];

    switch (criteria) {
      case "name_asc":
        sortedBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
        break;
      case "name_desc":
        sortedBooks.sort((a, b) => b.bookName.localeCompare(a.bookName));
        break;
      case "year_asc":
        sortedBooks.sort((a, b) => a.publishedYear - b.publishedYear);
        break;
      case "year_desc":
        sortedBooks.sort((a, b) => b.publishedYear - a.publishedYear);
        break;
      default:
        return;
    }

    setBooks(sortedBooks);
    setSortCriteria(criteria);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const updatedBooks = books.filter((item) =>
      item.bookName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBooks(updatedBooks);
  };

  const handleFavourite = (id) => {
    console.log(id);
    const newBookLists = [...books];
    const updatedObject = newBookLists.find((item) => item.id === id);
    updatedObject.favorite = !updatedObject.favorite;

    setBooks(newBookLists);
  };

  return (
    <main className="my-10 lg:my-14">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleSortBy={sortBy}
      ></Header>
      <BookListSection books={books} handleFavourite={handleFavourite} />
    </main>
  );
};

export default MainSection;
