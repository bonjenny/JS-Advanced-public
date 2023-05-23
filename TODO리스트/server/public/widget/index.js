import { createButton } from "./button";
import { createList } from "./list";

// Widget의 번들링 엔트리(시작) 파일
window.Widget = {
    button: createButton,
    list: createList,
};