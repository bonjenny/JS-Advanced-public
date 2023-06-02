import { rawWidget } from "./baseWidget.js";

function _createTodo(elName, option) {
  Widget.element("li", { id: `todoLi-${option.id}` })
    .append(
      Widget.element("input", {
        id: `todoCheck-${option.id}`,
        type: "checkbox",
        checked: option.checked,
        onChange: option.onCheckChange,
      })
    )
    .append(Widget.element("span", {
      id: `todoSpan-${option.id}`,
      innerText: option.value
    }))
    .append(Widget.element("button", {
      id: `todoBtn-${option.id}`,
      innerText: "삭제",
      type: "button",
      onClick: option.onDelClick,
    }));

  return {
    id: option.id,
    getEl: function () {
      return Widget.get(`todoLi-${option.id}`).getEl();
    }.bind(Widget),
    children: [
      Widget.get(`todoLi-${option.id}`),
      Widget.get(`todoCheck-${option.id}`),
      Widget.get(`todoSpan-${option.id}`),
      Widget.get(`todoBtn-${option.id}`),
    ],
  };
}

export var createTodo = rawWidget(_createTodo);
