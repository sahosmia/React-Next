import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskModal from "./TaskModal";
import TaskTable from "./TaskTable";
import { taskData } from "../../data/tasks";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(taskData);
  const [showModal, setShowModal] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState(null);

  const handleSubmitTask = (newTask, isAdd) => {
    console.log(isAdd);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          return task.id === newTask.id ? newTask : task;
        })
      );
    }
    handleCloseModal();
  };
  // Edit
  const handleEditModalOpen = (task) => {
    setTaskUpdate(task);
    setShowModal(true);
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

  // isFavorite Done
  const handleIsFavTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id == id
          ? { ...task, isFavourite: !task.isFavourite }
          : task;
      })
    );
  };

  const handleSearchTask = (searchTitle) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    setTasks([...filtered]);
  };


  // Modal Close
  const handleCloseModal = () => {
    setShowModal(false);
    setTaskUpdate(null);
  };
  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <TaskModal
          onModalClose={handleCloseModal}
          onSave={handleSubmitTask}
          taskUpdate={taskUpdate}
        />
      )}
      <div className="container">
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchBox onSearch={handleSearchTask} />
              <button
                onClick={() => setShowModal(!showModal)}
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

          <div className="overflow-auto">
            <TaskTable
              tasks={tasks}
              onEdit={handleEditModalOpen}
              onFavourite={handleIsFavTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
