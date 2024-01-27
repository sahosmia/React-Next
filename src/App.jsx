import { useState } from "react";
import AddTask from "./component/AddTask";
import TaskItem from "./component/TaskItem";
import { taskList } from "./data";

function App() {
  const [tasks, setTasks] = useState(taskList);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0
    );

    return maxId + 1;
  };

  // Add
  const handleAddTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        title: taskTitle,
        status: false,
      },
    ]);
  };

  // Change
  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      } else {
        return item;
      }
    });

    setTasks(nextTasks);
  };

  // Delete
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
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
