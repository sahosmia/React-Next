import { useState } from "react";
import {
  useTaskContext,
  useTaskDispatchContext,
} from "../contexts/TaskContext";
import { getNextId } from "../utils";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState(null);
  const tasks = useTaskContext();
  const dispatch = useTaskDispatchContext();

  const handleClick = () => {
    if (taskTitle !== "") {
      setTaskTitle("");
      dispatch({
        type: "add-task",
        id: getNextId(tasks),
        taskTitle,
      });
    } else {
      setError("This filed is empty");
    }
  };
  return (
    <div className="mx-auto flex gap-2 justify-center">
      <div>
        <input
          className="border-2 border-gray-300 rounded outline-none focus:border-orange-600 pl-2 w-64"
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        {error && <p className="text-red-700 font-semibold">{error}</p>}
      </div>
      <button
        onClick={handleClick}
        className="bg-orange-600 text-white px-5 rounded py-2"
      >
        Add Task
      </button>
    </div>
  );
}
