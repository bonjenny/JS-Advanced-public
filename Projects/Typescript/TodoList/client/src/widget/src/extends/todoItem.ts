import {
  rawWidget,
  WidgetOption,
  Control,
  ExtendedHTMLElement,
} from "../baseWidget";

function _createTodoItem(elName: string = "todoItem", option: WidgetOption) {
  var el = window.Widget.element("li", { id: option.id }).getEl();
  window.Widget.element("input", {
    id: `${option.id}-todoCheck`,
    type: "checkbox",
    checked: option.checked,
    onchange: option.onChange,
    parent: el,
  });
  window.Widget.element("span", {
    id: `${option.id}-todoSpan`,
    innterText: option.value,
    parent: el,
  });
  window.Widget.element("button", {
    id: `${option.id}-todoBtn`,
    innerText: "삭제",
    type: "button",
    onclick: option.onClick,
    parent: el,
  });

  const control: Control = {
    id: option.id || "",
    getEl: function () {
      return el;
    },
    focus: function () {
      el.focus();
    },
    setValue: function (value: string) {
      el.value = value;
    },
    innerHTML: function (html: string) {
      el.innerHTML = html;
    },
  };

  return control;
}

export var createTodoItem = rawWidget(_createTodoItem);
