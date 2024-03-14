import { TbEdit } from "react-icons/tb";
import { BsTrash3 } from "react-icons/bs";

const Posts = ({ posts, error, handleDelete, handleEditModalOpen }) => {
  return (
    <>
      {/* rendaring posts  */}
      <ol>
        {posts &&
          (posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id} className="border-b">
                <div className="flex items-center gap-10">
                  <h3 className="font-medium text-violet-700 text-lg py-2">
                    {post.title}
                  </h3>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditModalOpen(post)}>
                      <TbEdit />
                    </button>
                    <button onClick={() => handleDelete(post.id)}>
                      <BsTrash3 />
                    </button>
                  </div>
                </div>

                <p className="pb-2">{post.body}</p>
              </li>
            ))
          ) : (
            <p>No Data to Show</p>
          ))}
      </ol>

      {/* error  */}
      {error && (
        <p className="bg-red-400 text-white p-2 font-medium my-5">{error}</p>
      )}
    </>
  );
};

export default Posts;
