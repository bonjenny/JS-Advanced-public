export function createDiv(
    id, { parent }
) {
    var el = document.createElement("div");
    el.id = id;
    parent.append(el);

    Widget.addControl(el);
    return el;
}