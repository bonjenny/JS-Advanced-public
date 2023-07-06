// import { } from "../types/window";
import { createFragment } from "./raw/fragment.js";
import { createWidget } from "./raw/widget.js";
import { getControl } from "./core.js";

window.Widget = {
  fragment: createFragment,
  element: createWidget,
  get: getControl,
};
