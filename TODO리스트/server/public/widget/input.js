export function createInput(
    id, { checked, onChange, onKeyDown }
) {
    var el = document.createElement("input");
    el.id = id;
    if(checked !== undefined) {
        el.type = "checkbox";
        el.checked = checked;
    }
    el.onchange = onChange;
    el.onkeydown = onKeyDown;

    Widget.addControl(el);
    return el;
}