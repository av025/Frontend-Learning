function todoReducers(state, action) {
  if (action.type === "add_todo") {
    let todoText = action.payload.todoText;

    return [
      ...state,
      { id: state.length + 1, todoData: todoText, isFinished: false },
    ];
  } else if (action.type === "edit_todo") {
    let todoText = action.payload.todoText;
    let todoItem = action.payload.todoItem;

    const updatedList = state.map((t) => {
      if (t.id === todoItem.id) {
        return { ...t, todoData: todoText };
      }

      return t;
    });

    return updatedList;
  } else if (action.type === "delete_todo") {
    let todoItem = action.payload.todoItem;

    const updatedList = state.filter((t) => t.id !== todoItem.id);

    return updatedList;
  } else if (action.type === "finished_todo") {
    let todoItem = action.payload.todoItem;
    let isFinished = action.payload.isFinished; 
    const updatedList = state.map((t) => {
      if (t.id === todoItem.id) {
        todoItem.isFinished = isFinished;
      }

      return t;
    });
    return updatedList;
  }else {
    return state; 
  }
}

export default todoReducers;
