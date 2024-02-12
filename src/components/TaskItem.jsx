import { useState } from "react";
import { useTaskDispatchContext } from "../contexts/TaskContext";

// eslint-disable-next-line react/prop-types
export default function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [taskTitle, setTaskTitle] = useState(task.title);
  const dispatch = useTaskDispatchContext();

  const handleSubmit = () => {
    if (taskTitle !== "") {
      dispatch({
        type: "change-task",
        task: {
          ...task,
          title: taskTitle,
        },
      });
      setIsEditing(false);
    } else {
      setError("This filed is empty");
      setIsEditing(true);
    }
  };
  const taskContent = isEditing ? (
    <>
      <div>
        <input
          type="text"
          className="border-2 border-orange-600 rounded outline-none  pl-2 w-64"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        {error && <p className="text-red-700 font-semibold">{error}</p>}
      </div>
      <button
        className="bg-purple-600 text-white px-5 rounded py-2"
        onClick={handleSubmit}
      >
        Save
      </button>
    </>
  ) : (
    <>
      <p className="font-semibold">{task.title}</p>
      <button
        className="bg-blue-600 text-white px-5 rounded py-2"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
    </>
  );
  return (
    <div className="flex gap-2 pt-5 items-center">
      <input
        type="checkbox"
        checked={task.status}
        onChange={(e) =>
          dispatch({
            type: "change-task",
            task: {
              ...task,
              status: e.target.checked,
            },
          })
        }
      />
      {taskContent}
      <button
        onClick={() =>
          dispatch({
            type: "delete-task",
            id: task.id,
          })
        }
        className="bg-red-600 text-white px-5 rounded py-2"
      >
        Delete
      </button>
    </div>
  );
}
