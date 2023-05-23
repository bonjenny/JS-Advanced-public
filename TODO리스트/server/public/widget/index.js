import { createButton } from "./button";
import { createList } from "./list";

// Widget의 번들링 엔트리(시작) 파일
window.Widget = {
    button: createButton,
    list: createList,
    getControl: function() {

    }// 여기서 create한 모든 객체를 가지고있어야함
};