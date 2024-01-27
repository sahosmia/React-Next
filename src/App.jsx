import { useReducer } from "react";
import AddTask from "./component/AddTask";
import TaskItem from "./component/TaskItem";
import { taskList } from "./data";
import taskReducer from "./reducers/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, taskList);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0
    );

    return maxId + 1;
  };

  // Add
  const handleAddTask = (taskTitle) => {
    dispatch({
      type: "add-task",
      id: getNextId(tasks),
      taskTitle,
    });
  };

  // Change
  const handleChangeTask = (task) => {
    dispatch({
      type: "change-task",
      task,
    });
  };

  // Delete
  const handleDeleteTask = (id) => {
    dispatch({
      type: "delete-task",
      id,
    });
  };

  return (
    <>
      <div className="mx-auto max-w-xl mt-10">
        <h1 className="text-center text-4xl font-semibold pb-5">
          Prague itinerary
        </h1>

        <AddTask onAddTask={handleAddTask} />
        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            task={item}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default App;
