import Swal from "sweetalert2";
import { useTasksDispatch } from "../../contexts/tasksContext";
import { getRandomColor } from "../../utils/getRandomColor";
import ActiveFavouriteStar from "./ActiveFavouriteStar";
import InActiveFavouriteStar from "./InActiveFavouriteStar";
import { toast } from "react-toastify";

export default function TaskItem({ task, onEdit }) {
  const { id, title, isFavourite, description, tags, priority } = task;
  const dispatch = useTasksDispatch();

  // isFavorite
  const handleIsFavTask = (id) => {
    dispatch({
      type: "fav-task",
      id,
    });
    toast.success("This oparation is successfully.");
  };

  // Delete Task
  const handleDeleteTask = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "delete-task",
          id,
        });
        toast.success("This oparation is successfully.");
      }
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
          <button className="text-red-500" onClick={handleDeleteTask}>
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
