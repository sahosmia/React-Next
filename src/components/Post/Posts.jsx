import { TbEdit } from "react-icons/tb";
import { BsTrash3 } from "react-icons/bs";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/api";

const Posts = ({ posts, handleEditModalOpen }) => {
  const queryClient = useQueryClient();

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => {
      return api.delete(`/posts/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  // Delete Submit
  const handleDelete = async (id) => {
    deleteMutation.mutate(id);
    toast.success("Delete Successfully");
  };

  return (
    <>
      {posts &&
        (posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="border-b">
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
            </div>
          ))
        ) : (
          <p>No Data to Show</p>
        ))}
    </>
  );
};

export default Posts;
