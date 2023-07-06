import todoItemDatas from "./todoItemDatas";
import { Control, ExtendedHTMLElement } from "./widget/src/baseWidget";

export default class App {
  state: {
    todolist: todoItemDatas[];
    onKeyDownTodoInput: (
      elmn: ExtendedHTMLElement,
      event: KeyboardEvent
    ) => void;
    onClickSave: () => void;
    saveContent: (elmn: ExtendedHTMLElement) => void;
    getSortedTodoList: (doneObj: { done: boolean }) => todoItemDatas[];
    renderColumnDone: (data: todoItemDatas) => ExtendedHTMLElement;
    renderColumnTodo: (data: todoItemDatas) => string;
    renderColumnDelete: (data: todoItemDatas) => ExtendedHTMLElement;
    todolistControl: Control;
    donelistControl: Control;
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
        },
        {
          id: "002",
          contents: "완료된 할일",
          done: true,
        },
        {
          id: "003",
          contents: "할일2",
          done: false,
        },
        {
          id: "004",
          contents: "완료된 할일2",
          done: true,
        },
      ],
      onKeyDownTodoInput: (elmn, event) => {
        if (event.keyCode !== 13) return;
        this.state.saveContent(elmn);
      },
      onClickSave: () => {
        const elmn = window.Widget.get("todoInput").getEl();
        this.state.saveContent(elmn);
      },
      saveContent: (elmn) => {
        if (!elmn.value) {
          alert("할일을 입력해 주세요");
          elmn.focus();
          return;
        }
        this.state.todolist.push({
          id: crypto.randomUUID(),
          contents: elmn.value,
          done: false,
        });
        if (this.state.todolistControl.reload) {
          this.state.todolistControl.reload(
            this.state.getSortedTodoList({ done: false })
          );
        }
        elmn.value = "";
        elmn.focus();
      },
      getSortedTodoList: ({ done }) => {
        return this.state.todolist.filter((data) => data.done === done);
      },
      renderColumnDone: (data) => {
        return window.Widget.element("input", {
          checked: data.done,
          onchange: function () {
            data.done = !data.done;
            this.state.todolistControl.reload(
              this.state.getSortedTodoList({ done: false })
            );
            this.state.donelistControl.reload(
              this.state.getSortedTodoList({ done: true })
            );
          },
        }).getEl();
      },
      renderColumnTodo: (data) => {
        return data.contents;
      },
      renderColumnDelete: (data) => {
        return window.Widget.element("button", {
          onclick: function () {
            this.state.todolist.splice(this.state.todolist.indexOf(data), 1);
            this.state.todolistControl.reload(
              this.state.getSortedTodoList({ done: false })
            );
            this.state.donelistControl.reload(
              this.state.getSortedTodoList({ done: true })
            );
          },
        }).getEl();
      },
      todolistControl: window.Widget.todoList("todoList", {
        datas: this.state.getSortedTodoList({ done: false }),
        columns: {},
      }),
      donelistControl: window.Widget.todoList("doneList", {
        datas: this.state.getSortedTodoList({ done: true }),
        columns: {},
      }),
    };

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState,
      };
    };

    this.render = () => {
      window.Widget.element("h1", {
        innerText: "TODO 리스트",
        parent: $target,
      });
      const appChild = window.Widget.fragment("", { parent: $target });

      window.Widget.element("input", {
        id: "todoInput",
        onkeydown: this.state.onKeyDownTodoInput,
      });
    };
    this.render();
  }
}
