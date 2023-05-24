import { addControl } from "./core";

export function createDiv(
  id, { parent }
) {
  var el = document.createElement("div");
  parent.append(el);

  var control = {
    id: id,
    el: el,
    append: function (control) {
      el.append(control.el);
    }
  };
  addControl(control);
  return control;
}