import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import InputField from "../common/InputField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/api";
import { toast } from "react-toastify";
import ErrorMessage from "../common/ErrorMessage";

const Modal = ({ modalClose, postUpdate }) => {
  const isAdd = Object.is(postUpdate, null);

  const queryClient = useQueryClient();

  // Create Submit
  const createMutation = useMutation({
    mutationFn: (newItem) => {
      return api.post("/posts", newItem);
    },
    onSuccess: () => {
      toast.success("Post Create Successfully.");
      queryClient.invalidateQueries(["posts"]);
      modalClose();
    },
  });

  // Update Submit
  const updateMutation = useMutation({
    mutationFn: (updatedItem) => {
      return api.put(`/posts/${updatedItem.id}`, updatedItem);
    },
    onSuccess: () => {
      toast.success("Post Updated Successfully.");
      queryClient.invalidateQueries(["posts"]);
      modalClose();
    },
  });

  const formSubmit = async (formData) => {
    if (isAdd) {
      formData.id = crypto.randomUUID().toString();
      createMutation.mutate(formData);
    } else {
      updateMutation.mutate(formData);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    postUpdate !== null && {
      defaultValues: {
        id: postUpdate.id,
        title: postUpdate.title,
        body: postUpdate.body,
      },
    }
  );

  const inputClassName =
    "border border-violet-500 rounded outline-none px-2 py-1 text-sm text-gray-600";

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="bg-gray-200 px-5 py-5 rounded w-[600px]">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-medium">Create Post</h4>
          <span className="text-2xl cursor-pointer" onClick={modalClose}>
            <IoClose />
          </span>
        </div>

        {createMutation.isError && (
          <ErrorMessage message={createMutation.error.message} />
        )}
        {updateMutation.isError && (
          <ErrorMessage message={updateMutation.error.message} />
        )}
        <div>
          <form onSubmit={handleSubmit(formSubmit)}>
            {/* Title Input  */}
            <InputField label="Title" htmlFor="title" error={errors.title}>
              <input
                type="text"
                id="title"
                className={inputClassName}
                {...register("title", { required: "Title Filed is requied" })}
              />
            </InputField>
            {/* Description Input  */}
            <InputField label="Body" htmlFor="body" error={errors.body}>
              <textarea
                type="text"
                id="body"
                rows={5}
                className={inputClassName}
                {...register("body", {
                  required: "Body Filed is requied",
                })}
              ></textarea>
            </InputField>
            <button
              type="Submit"
              className="bg-violet-500 text-white px-5 py-2 rounded mr-1"
            >
              Save
            </button>
            <button
              onClick={modalClose}
              className="bg-gray-500 text-white px-5 py-2 rounded"
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
