import {
  rawWidget,
  WidgetOption,
  Control,
  ExtendedHTMLElement,
} from "../baseWidget";

function _createWidget(elName: string, option: WidgetOption) {
  var el = document.createElement(elName) as ExtendedHTMLElement;
  el.id = option.id || "";
  el.className = option.class || "";
  el.name = option.name;
  el.setAttribute("style", option.style || "");

  el.label = option.label;
  el.textContent = option.innerText ?? null;
  el.value = option.value;
  el.placeholder = option.placeholder;
  el.type = option.type;
  el.checked = option.checked;

  el.min = option.min;
  el.max = option.max;
  el.step = option.step;

  el.oninput = option.onInput ?? null;
  el.onclick = option.onClick ?? null;
  el.onchange = option.onChange ?? null;
  el.onsubmit = option.onSubmit ?? null;
  el.onblur = option.onBlur ?? null;
  el.onkeydown = option.onKeyDown ?? null;
  el.onkeypress = option.onKeyPress ?? null;

  el.colspan = option.colSpan;

  el.src = option.src;
  el.href = option.href;

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

export var createWidget = rawWidget(_createWidget);
