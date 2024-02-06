import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Footer from "./layout/Footer";
import SearchBox from "./components/SearchBox";
import TaskTable from "./components/TaskTable";
import { taskData } from "./data/tasks";
import { useState } from "react";
import AddTaskBox from "./components/AddTaskBox";
import EditTaskBox from "./components/EditTaskBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState(taskData);
  const [showAddCart, setShowAddCart] = useState(false);
  const [showEditCart, setShowEditCart] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const handleAddCartClose = () => {
    setShowAddCart(false);
  };

  const handleEditCartOpen = (task) => {
    setShowEditCart(true);
    setEditedTask(task);
  };
  const handleEditCartClose = () => {
    setShowEditCart(false);
  };

  // Add
  const handleAddSubmit = (formData) => {
    formData.tags = formData.tags.split(",");

    setTasks([...tasks, formData]);
    setShowAddCart(false);
    toast.success("Task added successfully");
    console.log(formData);
  };

  // Edit
  const handleEditSubmit = (formData) => {
    formData.tags = formData.tags.split(", ");
    const newTaskList = tasks.map((task) =>
      task.id !== formData.id ? task : formData
    );
    setTasks(newTaskList);
    setShowEditCart(false);
    toast.success("Task updated successfully");
    console.log(formData);
  };

  const handleFavourite = (id) => {
    const newTaskList = tasks.map((task) =>
      task.id !== id ? task : { ...task, isFavourite: !task.isFavourite }
    );
    setTasks(newTaskList);
  };

  // Delete
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully");
  };

  // All Delete
  const handleAllDelete = () => {
    setTasks([]);
    toast.success("All Task deleted successfully");
  };

  return (
    <>
      <Navbar />
      <Hero />

      {showAddCart && (
        <AddTaskBox
          onClose={handleAddCartClose}
          onAddSubmit={handleAddSubmit}
        />
      )}

      {showEditCart && (
        <EditTaskBox
          task={editedTask}
          onClose={handleEditCartClose}
          onEditSubmit={handleEditSubmit}
        />
      )}

      {/* <!-- Begin Table --> */}
      <section className="mb-20" id="tasks">
        <div className="container">
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <div className="mb-14 items-center justify-between sm:flex">
              <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
              <div className="flex items-center space-x-5">
                <SearchBox />
                <button
                  onClick={() => setShowAddCart(!showAddCart)}
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                >
                  Add Task
                </button>
                <button
                  className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                  onClick={handleAllDelete}
                >
                  Delete All
                </button>
              </div>
            </div>

            <div className="overflow-auto">
              <TaskTable
                tasks={tasks}
                onEditShow={handleEditCartOpen}
                onDelete={handleDelete}
                onFavourite={handleFavourite}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
