import { Item } from "./item.js"; // 명시적 모듈화
import { CircleData } from "./circleData.js"; // 명시적 모듈화

function game(item) {
    // 가위-바위-보-가위 순환
    // 나보다 앞에 있는 항목에겐 지고, 뒤에 있는 항목한테는 이긴다. 같으면 비긴다.
    
    var next = items.getNext(item);
    if (item === comCurrentItem) {
        alert("비겼습니다");
    } else if (next === comCurrentItem) {
        alert("졌습니다");
    } else {
        alert("이겼습니다");
    }

    clearInterval(timerId);
    
    startEl.removeAttribute('disabled');
    items.getAll().forEach(function (item) {
        item.disable(false);
    });
}

var items = new CircleData([
    new Item('scissors', "가위", game), 
    new Item('rock', "바위", game), 
    new Item('paper', "보", game)
]);

var timerId;
var comCurrentItem = items.getAll()[0];
var startEl = document.getElementById("start");
var comEl = document.getElementById("com");

var itemButtonsEl = document.getElementById("item-buttons");

items.getAll().forEach(function (item) {
    item.render(itemButtonsEl);
    item.disable(true);
});

startEl.onclick = function () {
    startEl.setAttribute('disabled', true);
    items.getAll().forEach(function (item) {
        item.disable(false);
    });

    timerId = setInterval(function () {
        comCurrentItem = items.getNext(comCurrentItem);
        comEl.textContent = comCurrentItem.name;
    }, 100);
}