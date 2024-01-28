import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Footer from "./layout/Footer";
import SearchBox from "./components/SearchBox";
import TaskTable from "./components/TaskTable";
import { tasks } from "./data/tasks";
import { useState } from "react";

function App() {
  const [isAddCartOpen, setIsAddCartOpen] = useState();
  return (
    <>
      <Navbar />
      <Hero />

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
                  onClick={() => setIsAddCartOpen(!isAddCartOpen)}
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                >
                  Add Task
                </button>
                <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
                  Delete All
                </button>
              </div>
            </div>

            <div className="overflow-auto">
              <TaskTable tasks={tasks} />
            </div>
          </div>
        </div>
      </section>

      {/*  */}
       <form
      className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
    >
      <h2
        className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
      >
        Add New Task
      </h2>

      {/* <!-- inputs --> */}
      <div className="space-y-9 text-white lg:space-y-10">
        {/* <!-- title --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
            required
          />
        </div>
        {/* <!-- description --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            required
          ></textarea>
        </div>
        {/* <!-- input group --> */}
        <div
          className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
        >
          {/* <!-- tags --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              required
            />
          </div>
          {/* <!-- priority --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- inputs ends --> */}
      <div className="mt-16 flex justify-center lg:mt-20">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          Create new Task
        </button>
      </div>
    </form>
    {/* <!-- Add Task Form Ends --> */}

      <Footer />
    </>
  );
}

export default App;
