import { useState } from "react";
import ActionBar from "./ActionBar";
import SearchBox from "./SearchBox";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import NoTaskFound from "./NoTaskFound";

const TaskBoard = () => {
  const initialTask = {
    id: 1,
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([initialTask]);
  const [isModal, setIsModal] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState(null);

  const handleSubmitTask = (newTask, isAdd) => {
    console.log(isAdd);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      // const id = tasks.findIndex((task) => task.id === newTask.id);
      setTasks(
        tasks.map((task) => {
          return task.id === newTask.id ? newTask : task;
        })
      );
    }
    handleCloseModal();
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    console.log(id);
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  // All Delete Task
  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  // Edit
  const handleEditModalOpen = (task) => {
    setTaskUpdate(task);
    setIsModal(true);
  };

  // isFavorite Done
  const handleIsFavTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id == id ? { ...task, isFavorite: !task.isFavorite } : task;
      })
    );
  };

  // Modal Open
  const handleOpenModal = () => {
    setIsModal(!isModal);
  };

  const handleSearchTask = (searchTitle) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    setTasks([...filtered]);
  };

  // Modal Close
  const handleCloseModal = () => {
    setIsModal(false);
    setTaskUpdate(null);
  };

  return (
    <section className="mb-20" id="tasks">
      {isModal && (
        <TaskModal
          onModalClose={handleCloseModal}
          onSave={handleSubmitTask}
          taskUpdate={taskUpdate}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox onSearch={handleSearchTask} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <ActionBar
            onModalOpen={handleOpenModal}
            onDeleteAll={handleDeleteAllTask}
          />

          <TaskList
            tasks={tasks}
            onModalOpen={handleEditModalOpen}
            onFav={handleIsFavTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
