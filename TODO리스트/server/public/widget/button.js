import { addControl } from "./core";

export function createButton(
  id, { label, onClick }
) {
  var el = document.createElement("button");
  el.textContent = label;
  el.onclick = onClick;

  var control = {
    id: id,
    el: el,
  }
  addControl(control);
  return control;
}