import { widget } from "../baseWidget";

function _createButton(id, { label, onClick }) {
  var el = document.createElement("button");
  el.textContent = label;
  el.onclick = onClick;

  return {
    id: id,
    el: el,
    dispose: function () {
      el.remove();
      removeControl(id);
    },
  };
}

export var createButton = widget(_createButton);
