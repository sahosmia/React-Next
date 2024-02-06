import AddTaskBox from "./AddTaskBox";
import TaskItem from "./TaskItem";

export default function TaskTable({ tasks, onEditShow, onDelete, onFavourite }) {
  return (
    <>
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.length !== 0 ? (
            tasks.map((item) => (
              <TaskItem
                key={item.id}
                task={item}
                onEditShow={onEditShow}
                onDelete={onDelete}
                onFavourite={onFavourite}
              />
            ))
          ) : (
            <tr>
              <td colSpan={10} className="text-center text-red-600">
                Task List is empty!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
