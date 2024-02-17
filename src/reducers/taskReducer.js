const taskReducer = (state, action) => {
  switch (action.type) {
    // add edit
    case "submit-task": {
      if (action.isAdd) {
        return [...state, action.newTask];
      } else {
        return state.map((task) =>
          task.id === action.newTask.id ? action.newTask : task
        );
      }
    }
    // Favorite
    case "fav-task": {
      return state.map((task) => {
        return task.id == action.id
          ? { ...task, isFavourite: !task.isFavourite }
          : task;
      });
    }

    // delete
    case "delete-task": {
      return state.filter((task) => task.id !== action.id);
    }

    // all delete
    case "delete-all-task": {
      return [];
    }

    // search
    case "search-task": {
      return state.filter((task) =>
        task.title.toLowerCase().includes(action.searchTitle.toLowerCase())
      );
    }
  }

  throw Error("Unknown action: " + action.type);
};

export { taskReducer };
