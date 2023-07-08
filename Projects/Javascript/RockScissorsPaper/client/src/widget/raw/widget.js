import { rawWidget } from "../baseWidget.js";

function _createWidget(elName, option) {
  var el = document.createElement(elName);
  el.id = option.id;
  el.class = option.class;
  el.name = option.name;
  el.style = option.style;

  el.textContent = option.innerText;
  el.value = option.value;
  el.type = option.type;
  el.checked = option.checked;

  el.min = option.min;
  el.max = option.max;
  el.step = option.step;

  el.oninput = option.onInput;
  el.onclick = option.onClick;
  el.onchange = option.onChange;
  el.onsubmit = option.onSubmit;
  el.onblur = option.onBlur;
  el.onkeydown = option.onKeyDown;
  el.onkeypress = option.onKeyPress;

  el.colspan = option.colSpan;

  el.src = option.src;
  el.href = option.href;

  return {
    id: option.id,
    getEl: function () {
      return el;
    },
    focus: function () {
      el.focus();
    },
    setValue: function (value) {
      el.value = value;
    },
    innerHTML: function (html) {
      el.innerHTML = html;
    }
  };
}

export var createWidget = rawWidget(_createWidget);
