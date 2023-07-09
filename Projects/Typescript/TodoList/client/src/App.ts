import todoItemData from "./interface/todoItemData";
import { renderList, renderTodolist } from "./utils/renderList";
import { saveTodoItem } from "./utils/saveTodoItem";
import { ExtendedHTMLElement } from "./widget/src/baseWidget";

export default class App {
  state: {
    todoData: todoItemData[];
  };
  setState: (nextState: any) => void;
  render: () => void;

  constructor({ $target }: { $target: ExtendedHTMLElement }) {
    this.state = {
      todoData: [
        {
          id: "001",
          contents: "할일",
          done: false,
          deleted: false,
        },
        {
          id: "002",
          contents: "완료된 할일",
          done: true,
          deleted: false,
        },
        {
          id: "003",
          contents: "할일2",
          done: false,
          deleted: false,
        },
        {
          id: "004",
          contents: "완료된 할일2",
          done: true,
          deleted: false,
        },
      ],
    };

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState,
      };
    };

    this.render = () => {
      const appChild = window.Widget.fragment("", { parent: $target }).getEl();

      window.Widget.element("h1", {
        innerText: "TODO 리스트",
        parent: appChild,
      });

      window.Widget.element("input", {
        id: "todoInput",
        onKeyDown: (event: KeyboardEvent) => {
          if (event.keyCode !== 13) return;
          const inputElmn = window.Widget.get("todoInput").getEl();
          saveTodoItem(inputElmn, this.state.todoData);
        },
        placeholder: "할 일을 입력해주세요.",
        value: "",
        parent: appChild,
      });

      window.Widget.element("button", {
        id: "btnSave",
        innerText: "입력",
        onClick: () => {
          const inputElmn = window.Widget.get("todoInput").getEl();
          saveTodoItem(inputElmn, this.state.todoData);
        },
        parent: appChild,
      });

      window.Widget.todoList("todoList", {
        id: "todoList",
        datas: [],
        columns: {
          onChange: () => renderList(this.state.todoData),
          onClick: () => renderList(this.state.todoData),
        },
        parent: appChild,
      });
      window.Widget.todoList("doneList", {
        id: "doneList",
        datas: [],
        columns: {
          onChange: () => renderList(this.state.todoData),
          onClick: () => renderList(this.state.todoData),
        },
        parent: appChild,
      });

      renderList(this.state.todoData);

      $target.appendChild(appChild);
    };
    this.render();
  }
}
