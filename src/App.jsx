import { api } from "./api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";
import Posts from "./components/Post/Posts";
import Modal from "./components/common/Modal";

function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postUpdate, setPostUpdate] = useState(null);
  const [search, setSearch] = useState("");

  // Fatch data first time
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await api.get("/posts");
        if (response && response.data) {
          setPosts(response.data);
          setError(null);
        }
        setLoading(false);
      } catch (error) {
        setPosts(null);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Modal Open Handle
  const modalOpen = () => {
    setModal(true);
  };

  // Modal Close Handle
  const modalClose = () => {
    setModal(false);
    setPostUpdate(null);
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/posts/${id}`);
      console.log(response);
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
      toast.success("Delete Successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  // Submit
  const onSubmit = async (formData, isAdd) => {
    try {
      console.log(isAdd);
      const id = Date.now() + Math.floor(Math.random() * 100);
      formData.id = id.toString();
      const response = await api.post("/posts", formData);
      setPosts([...posts, formData]);
      toast.success("Post Create Successfully.");
      modalClose();
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  // form Edit Submit
  const editSubmit = async (formData) => {
    try {
      const response = await api.patch(`/posts/${formData.id}`, formData);
      setPosts(
        posts.map((post) => {
          return post.id === formData.id ? formData : post;
        })
      );
      toast.success("Post Update Successfully.");
      modalClose();
    } catch (error) {
      setError(error.message);
    }
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

  return (
    <>
      {/* Modal  */}
      {modal && (
        <Modal
          modalClose={modalClose}
          formSubmit={onSubmit}
          editSubmit={editSubmit}
          postUpdate={postUpdate}
        />
      )}

      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-semibold text-2xl">Photos List</h1>
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
        {loading ? (
          <h1>loading....</h1>
        ) : (
          <Posts
            posts={posts}
            error={error}
            handleDelete={handleDelete}
            handleEditModalOpen={handleEditModalOpen}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
