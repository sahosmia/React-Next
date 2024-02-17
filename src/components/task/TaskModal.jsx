import { useState } from "react";
import { toast } from "react-toastify";

const TaskModal = ({ onModalClose, onSave, taskUpdate }) => {
  const [isAdd, setIsAdd] = useState(Object.is(taskUpdate, null));
  const [formData, setFormData] = useState(
    taskUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }

    setFormData({ ...formData, [name]: value });
  };
  const errorMassage = (inputName) => {
    return toast.error("This " + inputName + " will be not empty.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title !== "" &&
      formData.description !== "" &&
      formData.tags.length !== 0 &&
      formData.priority !== ""
    ) {
      onSave(formData, isAdd);
      toast.success("This oparation is successfully.");
    } else {
      formData.title === "" && errorMassage("title");
      formData.description === "" && errorMassage("description");
      formData.tags.length === 0 && errorMassage("tags");
      formData.priority === "" && errorMassage("priority");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20 gap-2">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save
          </button>
          <button
            className="border border-white rounded px-4 py-2  text-white transition-all hover:opacity-80"
            type="button"
            onClick={onModalClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
