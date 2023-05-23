export function createButton(
    id, { label, onClick }
) {
    var el = document.createElement("button");
    el.id = id;
    el.textContent = label;
    el.onclick = onClick;

    Widget.addControl(el);
    return el;
}