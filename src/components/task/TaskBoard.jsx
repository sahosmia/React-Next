import { useReducer, useState } from "react";
import SearchBox from "./SearchBox";
import TaskModal from "./TaskModal";
import TaskTable from "./TaskTable";
import { taskData } from "../../data/tasks";
import { taskReducer } from "../../reducers/taskReducer";

const TaskBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState(null);
  const [state, dispatch] = useReducer(taskReducer, taskData);

  const handleSubmitTask = (newTask, isAdd) => {
    dispatch({
      type: "submit-task",
      isAdd,
      newTask,
    });
    handleCloseModal();
  };
  // Edit
  const handleEditModalOpen = (task) => {
    setTaskUpdate(task);
    setShowModal(true);
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    dispatch({
      type: "delete-task",
      id,
    });
  };

  // All Delete Task
  const handleDeleteAllTask = () => {
    dispatch({
      type: "delete-all-task",
    });
  };

  // isFavorite
  const handleIsFavTask = (id) => {
    dispatch({
      type: "fav-task",
      id,
    });
  };

  // Search
  const handleSearchTask = (searchTitle) => {
    dispatch({
      type: "search-task",
      searchTitle,
    });
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
              tasks={state}
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
