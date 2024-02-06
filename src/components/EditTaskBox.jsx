import React, { useState } from "react";
import FormTitle from "./form/FormTitle";
import FormDescription from "./form/FormDescription";
import FormTags from "./form/FormTags";
import FormPriority from "./form/FormPriority";
import { toast } from "react-toastify";

const EditTaskBox = ({ task, onClose, onEditSubmit }) => {
  const { id, title, description, tags, priority } = task;
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    id: id,
    title: title,
    description: description,
    tags: tags.join(", "), // Join use for array to string
    priority: priority,
  });

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error) {
      onEditSubmit(formData);
    } else {
      toast.error("Remove all error first in this form.");
      console.log("anythings is wrong");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Edit Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <FormTitle
            title={formData.title}
            setTitle={(value) => setFormData({ ...formData, title: value })}
            setError={setError}
          />

          <FormDescription
            description={formData.description}
            setDescription={(value) =>
              setFormData({ ...formData, description: value })
            }
            setError={setError}
          />

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <FormTags
              tags={formData.tags}
              setTags={(value) => setFormData({ ...formData, tags: value })}
              setError={setError}
            />

            <FormPriority
              priority={formData.priority}
              setPriority={(value) =>
                setFormData({ ...formData, priority: value })
              }
              setError={setError}
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20 gap-2">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Update Task
          </button>
          <button
            className="border border-white rounded px-4 py-2  text-white transition-all hover:opacity-80"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskBox;
