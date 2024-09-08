import { useState } from "react";
import { bookLists } from "../data";
import Header from "./Header";
import BookListSection from "./BookListSection";

const MainSection = () => {
  const [books, setBooks] = useState(bookLists);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSortBy = (criteria, booklist = books) => {
    let sortedBooks = [...booklist];

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
    setSortBy(criteria);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const updatedBooks = bookLists.filter((item) =>
      item.bookName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (sortBy) {
      handleSortBy(sortBy, updatedBooks);
    } else {
      setBooks(updatedBooks);
    }
  };

  const handleFavourite = (id) => {
    const newBookLists = [...books];
    const updatedBooks = newBookLists.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );

    setBooks(updatedBooks);
  };

  return (
    <main className="my-10 lg:my-14">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleSortBy={handleSortBy}
      />
      <BookListSection books={books} handleFavourite={handleFavourite} />
    </main>
  );
};

export default MainSection;
