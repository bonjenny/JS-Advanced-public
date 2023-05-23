var todolist = [
    {
        id: 1,
        contents: "할일",
        done: false,
    },
    {
        id: 2,
        contents: "완료된 할일",
        done: true,
    },
    {
        id: 3,
        contents: "할일2",
        done: false,
    },
    {
        id: 4,
        contents: "완료된 할일2",
        done: true,
    },
];

function onKeyDownTodoInput() {
    if (event.keyCode !== 13) return;
    saveContent(this);
}

function onClickSave() {
    var contentsEl = Widget.getControl("todoInput");
    saveContent(contentsEl);
}

function saveContent(contentsEl) {
    if(!contentsEl.value) {
        alert("할일을 입력해 주세요");
        return;
    }

    todolist.push({
        id: crypto.randomUUID(),
        contents: contentsEl.value,
        done: false,
    });

    todolistControl.reload(getSortedTodoList({ done: false }));

    contentsEl.value = "";
    contentsEl.focus();
}

function getSortedTodoList({done}) {
    return todolist.filter(data => data.done === done);
}

function renderColumnDone(data) {
    return Widget.input(undefined, {
        checked: data.done,
        onChange: function() {
            data.done = !data.done;
            todolistControl.reload(getSortedTodoList({ done: false }));
            donelistControl.reload(getSortedTodoList({ done: true }));
        },
    });
}

function renderColumnTodo(data) {
    return data.contents;
}

function renderColumnDelete(data) {
    return Widget.button(undefined, {
        label: "삭제",
        onClick: function() {
            todolist.splice(todolist.indexOf(data), 1);
            todolistControl.reload(getSortedTodoList({ done: false }));
            donelistControl.reload(getSortedTodoList({ done: true }));
        },
    });
}

var todolistControl = Widget.list("todoList", {
    datas: getSortedTodoList({ done: false }),
    columns: [
        { id: "done", render: renderColumnDone },
        { id: "todo", render: renderColumnTodo },
        { id: "delete", render: renderColumnDelete },
    ],
});

var donelistControl = Widget.list("todoListDone", {
    datas: getSortedTodoList({ done: true }),
    columns: [
        { id: "done", render: renderColumnDone },
        { id: "todo", render: renderColumnTodo },
        { id: "delete", render: renderColumnDelete },
    ],
});

function render() {
    var root = document.getElementById("contents");
    var div = Widget.div("container", { parent: root });

    div.append(Widget.input("todoInput", { onKeyDown: onKeyDownTodoInput }));
    div.append(Widget.button("btnSave", { label: "입력", onClick: onClickSave }));
    div.append(todolistControl.el);
    div.append(donelistControl.el);
}
render();