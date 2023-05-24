import { widget } from "./baseWidget";

function _createInput(
  id, { checked, onChange, onKeyDown }
) {
  var el = document.createElement("input");
  if (checked !== undefined) {
    el.type = "checkbox";
    el.checked = checked;
  }
  el.onchange = onChange;
  el.onkeydown = onKeyDown;

  return {
    id: id,
    el: el,
  };
}

export var createInput = widget(_createInput);