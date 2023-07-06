import { handleTodoSubmit } from "./todolist.js";

function render() {
  Widget.fragment("", { id: "fragment" })
    .append(Widget.element("h1", { id: "title", innerText: "TODO LIST" }))
    .append(
      Widget.element("form", { id: "todoForm", onSubmit: handleTodoSubmit })
        .append(
          Widget.element("div", { id: "inputContainer" })
            .append(Widget.element("input", { id: "todoInput", name: "todoValue", value: "" }))
            .append(Widget.element("button", { id: "submitBtn", type: "submit", innerText: "입력" }))
        )
    )
    .append(Widget.element("h3", { id: "todoListTitle", innerText: "TODO" }))
    .append(Widget.element("ul", { id: "todoList" }))
    .append(Widget.element("h3", { id: "doneListTitle", innerText: "DONE" }))
    .append(Widget.element("ul", { id: "doneList" }))
    .append(Widget.element("div", { id: "testDiv", innerText: "TEST" }))
  document.body.append(Widget.get("fragment").getEl());
}

render();
