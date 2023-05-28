import { widget } from "../baseWidget";

function _createDiv(id, { parent }) {
  var el = document.createElement("div");
  parent.append(el);

  return {
    id: id,
    el: el,
    append: function (control) {
      el.append(control.el);
    },
  };
}

export var createDiv = widget(_createDiv);
