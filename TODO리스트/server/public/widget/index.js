import { createDiv } from "./div";
import { createButton } from "./button";
import { createInput } from "./input";
import { createList } from "./list";
import { getControl } from "./core";

window.Widget = {
  div: createDiv,
  button: createButton,
  input: createInput,
  list: createList,
  getControl: getControl,
};