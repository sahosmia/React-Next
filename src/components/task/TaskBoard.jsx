import { useState } from "react";
import TaskModal from "./TaskModal";
import TaskTable from "./TaskTable";
import { useTasksDispatch } from "../../contexts/tasksContext";
import ActionBar from "./ActionBar";

const TaskBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState(null);
  const dispatch = useTasksDispatch();

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
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <ActionBar showModal={() => setShowModal(!showModal)} />

          <div className="overflow-auto">
            <TaskTable onEdit={handleEditModalOpen} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
