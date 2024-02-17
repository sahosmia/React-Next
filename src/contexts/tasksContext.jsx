import { createContext, useContext, useReducer } from "react";
import { taskData } from "../data/tasks";
import { tasksReducer } from "../reducers/tasksReducer";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, taskData);
  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

function useTasks() {
  return useContext(TasksContext);
}

function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export { TasksContext, TasksProvider, useTasks, useTasksDispatch };
