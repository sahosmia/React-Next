import { useTasksDispatch } from "../../contexts/tasksContext";
import SearchBox from "./SearchBox";

const ActionBar = ({ showModal }) => {
  const dispatch = useTasksDispatch();
  // All Delete Task
  const handleDeleteAllTask = () => {
    dispatch({
      type: "delete-all-task",
    });
    toast.success("This oparation is successfully.");
  };

  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <SearchBox/>
        <button
          onClick={showModal}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleDeleteAllTask}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
