import { Item } from "./item.js"; // 명시적 모듈화

// 코드 중복이 발생할 수 있는 구조를 방지
var startEl = document.getElementById("start");
var comEl = document.getElementById("com");

function game(key) {
    var com = items[currentIndex];
    if (key === 'scissors' && com.key === 'scissors') {
        alert('비겼습니다');
    }
}

var itemButtonsEl = document.getElementById("item-buttons");
var items = [
    new Item('scissors', "가위", game), 
    new Item('rock', "바위", game), 
    new Item('paper', "보", game)
];

items.forEach(function (item) {
    item.render(itemButtonsEl);
    item.disable(true);
});

var currentIndex = 0;
var timerId;

startEl.onclick = function () {
    startEl.setAttribute('disabled', true);
    items.forEach(function (item) {
        item.disable(false);
    });

    timerId = setInterval(function () {
        currentIndex = ++currentIndex % 3;
        comEl.textContent = items[currentIndex].name;
    }, 100);
}