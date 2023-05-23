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

renderTodoList();
renderDoneList();

var inputBtnEl = document.getElementById("todo-input");
var contentsEl = document.getElementById("todo-contents");

// var inputControl = Widget.input("todo-input");

var containerEl = document.getElementById("container");
var inputBtnControl = Widget.button({ 
    label: "입력",
    onClick: function() {
        if(!contentsEl.value) {
            alert("할일을 입력해 주세요");
            return;
        }

        // Widget.getContro("todo-input"); // 하면 더 좋은 패턴이 될 것같음

        todolist.push({
            id: crypto.randomUUID(), // 랜덤한 유니크한 문자 아이디 생성
            contents: contentsEl.value, // contents: inputControl.getValue();
            done: false,
        });
        renderTodoList();

        contentsEl.value = "";
        contentsEl.focus();
    }
});
containerEl.append(inputBtnControl.el);

var todolistControl = Widget.list({
    datas: todolist,
    columns: [
        {
            render: function (data) {
                var delBtnControl = Widget.button({
                    label: "삭제",
                    onClick: function() {
                        todolist.splice(todolist.indexOf(item), 1);
                        todolistControl.reload();
                    },
                });
                return delBtnControl.el;
            },
        },
    ],
});
containerEl.append(todolistControl.el);

function renderTodoList() {
    // var todolistEl = document.getElementById("todo-list");
    // todolistEl.innerHTML = "";

    // todolist
    //     .filter(function(item) { return !item.done })
    //     .forEach(function(item) {
    //         var itemEl = createTodoItem(item);
    //         todolistEl.append(itemEl);
    //     });
}

function renderDoneList() {
    var donelistEl = document.getElementById("done-list");
    donelistEl.innerHTML = "";

    todolist
        .filter(function(item) { return item.done })
        .forEach(function(item) {
            var itemEl = createTodoItem(item);
            donelistEl.append(itemEl);
        });
}

contentsEl.onkeyup = function(event) {
    if (event.keyCode !== 13) return;
    if(!contentsEl.value) {
        alert("할일을 입력해 주세요");
        return;
    }
    todolist.push({
        id: crypto.randomUUID(), // 랜덤한 유니크한 문자 아이디 생성
        contents: contentsEl.value,
        done: false,
    });
    contentsEl.value = "";
    contentsEl.focus();
    renderTodoList();
}

function createTodoItem(item) {
    var liEl = document.createElement("li");
    
    // 체크박스
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.onchange = function() { // todolist 객체는 주소값이 바뀌지 않음
        item.done = !item.done;
        renderTodoList();
        renderDoneList();
        // target, currentTarget => 버블링과 관련이 있음
    }

    // 컨텐츠
    var contents = document.createElement("span");
    contents.textContent = item.contents;

    // 삭제버튼
    var delBtnControl = Widget.button({
        label: "삭제",
        onClick: function() {
            todolist.splice(todolist.indexOf(item), 1);
            item.done ? renderDoneList() : renderTodoList();
        }
    })

    liEl.append(checkbox);
    liEl.append(contents);
    liEl.append(delBtnControl.el);

    return liEl;
};