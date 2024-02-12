import TaskItem from "./TaskItem";
import { useTaskContext } from "../contexts/TaskContext";

const TaskList = () => {
  const tasks = useTaskContext();
  return (
    <div>
      {tasks.map((item) => (
        <TaskItem key={item.id} task={item} />
      ))}
    </div>
  );
};

export default TaskList;
