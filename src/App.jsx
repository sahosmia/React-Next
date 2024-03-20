import { api } from "./api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Posts from "./components/Post/Posts";
import Modal from "./components/Post/Modal";
import { fetchPosts } from "./utils/fatchData";
import ErrorMessage from "./components/common/ErrorMessage";

function App() {
  const [modal, setModal] = useState(false);
  const [postUpdate, setPostUpdate] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);

  // Data fetching by useQuery
  const {
    isPending,
    isError,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts", { page, perPage }],
    queryFn: fetchPosts,
    retry: false,
  });

  // Modal Open Handle
  const modalOpen = () => {
    setModal(true);
  };

  // Modal Close Handle
  const modalClose = () => {
    setModal(false);
    setPostUpdate(null);
  };

  // Edit Modal open
  const handleEditModalOpen = (task) => {
    setPostUpdate(task);
    setModal(true);
  };

  // handleSearch
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  if (isError) {
    <h1>{error.message}</h1>;
  }
  return (
    <>
      {/* Modal  */}
      {modal && <Modal modalClose={modalClose} postUpdate={postUpdate} />}

      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-semibold text-2xl">Posts List</h1>
          <div className="flex">
            <input
              type="text"
              className="border border-violet-500 rounded outline-none w-60 mr-1 px-2 text-sm text-gray-600"
              placeholder="Search Here..."
              value={search}
              onChange={handleSearch}
            />
            <button
              onClick={modalOpen}
              className="bg-violet-500 text-white px-5 py-2 rounded"
            >
              Create
            </button>
          </div>
        </div>

        {/* Post reandaring  */}
        {isPending ? (
          <div>Loading...</div>
        ) : isError ? (
          <ErrorMessage message={error.message} />
        ) : (
          <Posts posts={posts.data} handleEditModalOpen={handleEditModalOpen} />
        )}

        {posts && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(posts.prev)}
          >
            Prev
          </button>
        )}
        {posts && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(posts.next)}
          >
            Next
          </button>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
