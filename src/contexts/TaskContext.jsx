import { createContext, useContext, useReducer } from "react";
import taskReducer from "../reducers/taskReducer";
import { taskList } from "../data";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, taskList);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const useTaskDispatchContext = () => {
  return useContext(TaskDispatchContext);
};
