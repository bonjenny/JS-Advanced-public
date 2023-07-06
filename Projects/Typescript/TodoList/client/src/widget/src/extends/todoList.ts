import todoItemDatas from "../../../todoItemDatas";
import {
  rawWidget,
  Control,
  ExtendedHTMLElement,
  WidgetOption,
} from "../baseWidget";

function _createTodoList(elName: string = "todoList", option: WidgetOption) {
  var el = window.Widget.element("ul", { id: option.id }).getEl();

  render(option.datas || [], option.columns || {});

  const control: Control = {
    id: option.id || "",
    getEl: function () {
      return el;
    },
    reload: function (datas) {
      el.innerHTML = "";
      render(datas, option.columns || {});
    },
  };

  return control;

  function render(datas: todoItemDatas[], columns: WidgetOption): void {
    datas.forEach((data) => {
      const todoItem = window.Widget.todoItem("todoItem", {
        ...columns,
        parent: el,
      });
    });
  }
}

export var createTodoList = rawWidget(_createTodoList);
