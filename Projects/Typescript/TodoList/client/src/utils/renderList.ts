import todoItemData from "../interface/todoItemData";

function _renderList(todoData: todoItemData[], todoItemDone: boolean) {
  const todolistControl = window.Widget.get(
    !todoItemDone ? "todoList" : "doneList"
  );
  todolistControl.reload(
    todoData.filter(
      (todoItem) => todoItem.done === todoItemDone && todoItem.deleted === false
    )
  );
}

export function renderTodolist(todoData: todoItemData[]) {
  _renderList(todoData, false);
}

export function renderDonelist(todoData: todoItemData[]) {
  _renderList(todoData, true);
}

export function renderList(todoData: todoItemData[]) {
  renderTodolist(todoData);
  renderDonelist(todoData);
}
