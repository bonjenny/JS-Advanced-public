import { createFragment } from "./raw/fragment";
import { createWidget } from "./raw/widget";
import { getControl } from "./core";

export {};
window.Widget = {
  fragment: createFragment,
  element: createWidget,
  get: getControl,
};
