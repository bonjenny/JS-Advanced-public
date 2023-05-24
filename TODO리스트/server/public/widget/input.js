import { addControl } from "./core";

export function createInput(
  id, { checked, onChange, onKeyDown }
) {
  var el = document.createElement("input");
  if (checked !== undefined) {
    el.type = "checkbox";
    el.checked = checked;
  }
  el.onchange = onChange;
  el.onkeydown = onKeyDown;

  var control = {
    id: id,
    el: el,
  };
  addControl(control);
  return control;
}

// export var createinput = widget(createInput);