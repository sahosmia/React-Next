import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import { TasksProvider } from "./contexts/tasksContext";

function App() {
  return (
    <>
      <TasksProvider>
        <Page />
        <ToastContainer />
      </TasksProvider>
    </>
  );
}

export default App;
