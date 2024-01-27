export default function taskReducer(tasks, action) {
  switch (action.type) {
    // add
    case "add-task": {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.taskTitle,
          status: false,
        },
      ];
    }
    // edit
    case "change-task": {
      return tasks.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        } else {
          return item;
        }
      });
    }

    // delete
    case "delete-task": {
      return tasks.filter((item) => item.id !== action.id);
    }

    default: {
      throw Error(`No action matched with ${action.type}`);
    }
  }
}
