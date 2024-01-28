import TaskItem from "./TaskItem";

export default function TaskTable({ tasks }) {
  return (
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
        {tasks.map((item) => (
          <TaskItem key={item.id} task={item} />
        ))}
      </tbody>
    </table>
  );
}
