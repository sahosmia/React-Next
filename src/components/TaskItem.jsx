import { getRandomColor } from "../utils/getRandomColor";
import ActiveFavouriteStar from "./ActiveFavouriteStar";
import InActiveFavouriteStar from "./InActiveFavouriteStar";

export default function TaskItem({ task, onEditShow, onDelete, onFavourite }) {
  const { id, title, isFavourite, description, tags, priority } = task;

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        {isFavourite ? (
          <ActiveFavouriteStar onFavourite={onFavourite} id={id} />
        ) : (
          <InActiveFavouriteStar onFavourite={onFavourite} id={id} />
        )}
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
              confirmDelete && onDelete(id);
            }}
          >
            Delete
          </button>
          <button className="text-blue-500" onClick={() => onEditShow(task)}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
