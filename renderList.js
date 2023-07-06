function renderList() {
    var root = document.querySelector("div#root");
    if (root === null) return;

    var rootChild = Widget.fragment("", {});

    var h2Javascript = Widget.element("h2", { innerText: "자바스크립트", parent: rootChild.getEl() });
    var pRsp = Widget.element("p", { parent: rootChild.getEl() });
    var pTodo = Widget.element("p", { parent: rootChild.getEl() });
    var pRestaurant = Widget.element("p", { parent: rootChild.getEl() });
    Widget.element("a", { innerText: "가위바위보", href: "./Projects/Javascript/RockScissorsPaper/server/public/index.html", parent: pRsp.getEl() });
    Widget.element("a", { innerText: "TODO리스트", href: "./Projects/Javascript/TodoList/server/public/index.html", parent: pTodo.getEl() });
    Widget.element("a", { innerText: "식당 시뮬레이션", href: "./Projects/Javascript/Restaurant/server/public/index.html", parent: pRestaurant.getEl() });

    var h2Javascript = Widget.element("h2", { innerText: "타입스크립트", parent: rootChild.getEl() });
    var pRsp = Widget.element("p", { parent: rootChild.getEl() });
    var pTodo = Widget.element("p", { parent: rootChild.getEl() });
    var pRestaurant = Widget.element("p", { parent: rootChild.getEl() });
    Widget.element("a", { innerText: "가위바위보", href: "./Projects/Typescript/RockScissorsPaper/server/public/index.html", parent: pRsp.getEl() });
    Widget.element("a", { innerText: "TODO리스트", href: "./Projects/Typescript/TodoList/server/public/index.html", parent: pTodo.getEl() });
    Widget.element("a", { innerText: "식당 시뮬레이션", href: "./Projects/Typescript/Restaurant/index.html", parent: pRestaurant.getEl() });

    root.append(rootChild.getEl());
}
renderList();