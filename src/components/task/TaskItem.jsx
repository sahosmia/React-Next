import { useTasksDispatch } from "../../contexts/tasksContext";
import { getRandomColor } from "../../utils/getRandomColor";
import ActiveFavouriteStar from "./ActiveFavouriteStar";
import InActiveFavouriteStar from "./InActiveFavouriteStar";

export default function TaskItem({ task, onEdit }) {
  const { id, title, isFavourite, description, tags, priority } = task;
  const dispatch = useTasksDispatch();

  // isFavorite
  const handleIsFavTask = (id) => {
    dispatch({
      type: "fav-task",
      id,
    });
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    dispatch({
      type: "delete-task",
      id,
    });
  };

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td onClick={() => handleIsFavTask(id)}>
        {isFavourite ? <ActiveFavouriteStar /> : <InActiveFavouriteStar />}
      </td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <li key={tag}>
              <span
                className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${getRandomColor()} px-2.5 text-sm capitalize text-[#F4F5F6]`}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            className="text-red-500"
            onClick={() => {
              const confirmDelete = window.confirm(
                `Are you sure you want to delete ${title}?`
              );
              confirmDelete && handleDeleteTask(id);
            }}
          >
            Delete
          </button>
          <button className="text-blue-500" onClick={() => onEdit(task)}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
