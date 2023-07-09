import todoItemData from "../interface/todoItemData";
import { ExtendedHTMLElement } from "../widget/src/baseWidget";
import { renderTodolist } from "./renderList";

export function saveTodoItem(
  inputElmn: ExtendedHTMLElement,
  todoData: todoItemData[]
) {
  if (!inputElmn.value) {
    alert("할일을 입력해 주세요");
    inputElmn.focus();
    return;
  }
  todoData.push({
    id: crypto.randomUUID(),
    contents: inputElmn.value,
    done: false,
    deleted: false,
  });
  renderTodolist(todoData);
  inputElmn.value = "";
  inputElmn.focus();
}
