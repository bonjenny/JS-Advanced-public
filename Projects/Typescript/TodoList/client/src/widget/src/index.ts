import { createFragment } from "./raw/fragment";
import { createWidget } from "./raw/widget";
import { getControl } from "./core";
import { createTodoItem } from "./extends/todoItem";
import { createTodoList } from "./extends/todoList";

window.Widget = {
  fragment: createFragment,
  element: createWidget,
  todoItem: createTodoItem,
  todoList: createTodoList,
  get: getControl,
};
