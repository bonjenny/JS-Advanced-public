import {
  createDiv,
  createList,
  createInput,
  createButton,
} from "./raw/index.js";
import { getControl } from "./core";

window.Widget = {
  div: createDiv,
  list: createList,
  input: createInput,
  button: createButton,
  get: getControl,
};
