import AddTask from "./components/AddTask";
import TaskProvider from "./contexts/TaskContext";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <TaskProvider>
        <div className="mx-auto max-w-xl mt-10">
          <h1 className="text-center text-4xl font-semibold pb-5">
            Prague itinerary
          </h1>
          <AddTask />
          <TaskList />
        </div>
      </TaskProvider>
    </>
  );
}

export default App;
