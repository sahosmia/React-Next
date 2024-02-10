import ActiveFav from "./ActiveFav";
import InActiveFav from "./InActiveFav";

const TaskItem = ({ task, onModalOpen, onFav, onDelete }) => {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td onClick={() => onFav(task.id)}>
        {task.isFavorite ? <ActiveFav /> : <InActiveFav />}
      </td>

      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag, i) => (
            <li key={i}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => onDelete(task.id)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => onModalOpen(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
