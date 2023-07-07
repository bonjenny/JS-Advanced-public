import todoItemDatas from "../../../todoItemDatas";
import { rawWidget, Control, WidgetOption } from "../baseWidget";

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
        id: data.id,
        innerText: data.contents,
        checked: data.done,
        onchange: (event: MouseEvent) => {
          data.done = !data.done;
          if (columns.onChange !== undefined) {
            columns.onChange(event);
          }
        },
        onclick: (event: MouseEvent) => {
          data.deleted = true;
          if (columns.onClick !== undefined) {
            columns.onClick(event);
          }
        },
        parent: el,
      });
    });
  }
}

export var createTodoList = rawWidget(_createTodoList);
