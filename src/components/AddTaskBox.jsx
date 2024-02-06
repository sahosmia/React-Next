import { useState } from "react";
import FormTitle from "./form/FormTitle";
import FormDescription from "./form/FormDescription";
import FormTags from "./form/FormTags";
import FormPriority from "./form/FormPriority";
import { toast } from "react-toastify";

const AddTaskBox = ({ onClose, onAddSubmit }) => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    id: 6,
    title: "",
    description: "",
    tags: "",
    priority: "",
  });
  const [errorData, setErrorData] = useState({
    
  });

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title === "" ||
      formData.description === "" ||
      formData.tags === "" ||
      formData.priority === ""
    ) {
      setError(true);

      if (formData.title === "") {
        var titleError = "Empty";
      }
      if (formData.description === "") {
        var descriptionError = "Empty";
      }
      setErrorData({ title: titleError, description: descriptionError });
    } else {
      if (!error) {
        onAddSubmit(formData);
      } else {
        toast.error("Remove all error first in this form.");
        console.log("anythings is wrong");
      }
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

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          <FormTitle
            title={formData.title}
            setTitle={(value) => setFormData({ ...formData, title: value })}
            errorMessage={errorData.title}
          />

          <FormDescription
            description={formData.description}
            setDescription={(value) =>
              setFormData({ ...formData, description: value })
            }
            errorMessage={errorData.description}
          />

          {/* <!-- input group --> */}
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
        {/* <!-- inputs ends --> */}
        <div className="mt-16 flex justify-center lg:mt-20 gap-2">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Create new Task
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

export default AddTaskBox;
