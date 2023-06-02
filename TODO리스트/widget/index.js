import { createFragment } from "./raw/fragment.js";
import { createWidget } from "./raw/widget.js";
import { createTodo } from "./todo.js";
import { getControl } from "./core.js";

window.Widget = {
  fragment: createFragment,
  element: createWidget,
  todo: createTodo,
  get: getControl,
};