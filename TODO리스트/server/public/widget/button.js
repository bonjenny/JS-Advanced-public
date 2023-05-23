// 위젯을 하나의 파일로 번들링

export function createButton({
    label, onClick
}) {
    var el = document.createElement("button");
    el.textContent = label;
    el.onclick = onClick;

    return {
        el: el,
    }
}