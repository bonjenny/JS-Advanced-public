import todoItemDatas from "./todoItemDatas";
import { Control, ExtendedHTMLElement } from "./widget/src/baseWidget";

export default class App {
  state: {
    todolist: todoItemDatas[];
    todolistControl: Control;
    donelistControl: Control;
    renderList: () => void;
    renderTodolist: () => void;
    renderDonelist: () => void;
    saveTodoitem: (inputElmn: ExtendedHTMLElement) => void;
    deleteTodoitem: () => void;
  };
  setState: (nextState: any) => void;
  render: () => void;

  constructor({ $target }: { $target: ExtendedHTMLElement }) {
    this.state = {
      todolist: [
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
      todolistControl: window.Widget.todoList("todoList", {
        id: "todoList",
        datas: [],
        columns: {
          onChange: () => this.state.renderList(),
          onClick: () => this.state.deleteTodoitem(),
        },
      }),
      donelistControl: window.Widget.todoList("doneList", {
        id: "doneList",
        datas: [],
        columns: {
          onChange: () => this.state.renderList(),
          onClick: () => this.state.deleteTodoitem(),
        },
      }),
      renderList: () => {
        this.state.renderTodolist();
        this.state.renderDonelist();
      },
      renderTodolist: () => {
        if (this.state.todolistControl.reload !== undefined) {
          this.state.todolistControl.reload(
            this.state.todolist.filter((todoItem) => todoItem.done === false)
          );
        }
      },
      renderDonelist: () => {
        if (this.state.donelistControl.reload !== undefined) {
          this.state.donelistControl.reload(
            this.state.todolist.filter((todoItem) => todoItem.done === true)
          );
        }
      },
      saveTodoitem: (inputElmn) => {
        if (!inputElmn.value) {
          alert("할일을 입력해 주세요");
          inputElmn.focus();
          return;
        }
        this.state.todolist.push({
          id: crypto.randomUUID(),
          contents: inputElmn.value,
          done: false,
          deleted: false,
        });
        this.state.renderTodolist();
        inputElmn.value = "";
        inputElmn.focus();
      },
      deleteTodoitem: () => {
        this.state.todolist = this.state.todolist.filter(
          (todoItem) => todoItem.deleted === false
        );
        this.state.renderList();
      },
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
          this.state.saveTodoitem(inputElmn);
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
          this.state.saveTodoitem(inputElmn);
        },
        parent: appChild,
      });

      appChild.appendChild(this.state.todolistControl.getEl());
      appChild.appendChild(this.state.donelistControl.getEl());

      this.state.renderList();

      $target.appendChild(appChild);
    };
    this.render();
  }
}
