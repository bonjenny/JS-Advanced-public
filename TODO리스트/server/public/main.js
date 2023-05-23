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

function renderTodoList() {
    var todolistEl = document.getElementById("todo-list");
    todolistEl.innerHTML = "";

    todolist
        .filter(function(item) { return !item.done })
        .forEach(function(item) {
            var itemEl = createTodoItem(item);
            todolistEl.append(itemEl);
        });
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

renderTodoList();
renderDoneList();

var inputBtnEl = document.getElementById("todo-input");
var contentsEl = document.getElementById("todo-contents");
inputBtnEl.onclick = function() {
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
    var delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = function() {
        // 1) filter: todolist의 주소값이 바뀌어버림
        // todolist = todolist.filter(function(x) {
        //     return x !== item;
        // })
        // 2) splice
        todolist.splice(todolist.indexOf(item), 1);
        item.done ? renderDoneList() : renderTodoList();
    }

    liEl.append(checkbox);
    liEl.append(contents);
    liEl.append(delBtn);

    return liEl;
};