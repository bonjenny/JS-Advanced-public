// 코드 중복이 발생할 수 있는 구조를 방지
var startEl = document.getElementById("start");
var comEl = document.getElementById("com");

var items = ["가위", "바위", "보"];
var currentIndex = 0;

startEl.onclick = function () {
    // while, for 등 반복문을 쓰면 너무 빠름!!
    // 아무 반응 없이 작동 안됨
    // v8엔진 싱글스레드에서 while을 돌리는 중에
    // 렌더링(메인스레드에서 수행)을 할 수 없음
    // 즉, 렌더링할 시간을 주어야 함

    // while (true) {
    //     comEl.textContent = items[0];
    // }

    // 렌더링할 시간을 줌, 요 시간(ms)마다 안의 function을 실행
    setInterval(function() {
        currentIndex = ++currentIndex % 3;
        comEl.textContent = items[currentIndex];
    }, 100);
}

var scissorsEl = document.getElementById("scissors");
scissorsEl.onclick = function() {
    // 얘가 수행되는 중에는 currentIndex가 바뀌지 않을 것 (싱글스레드)
    var com = items[currentIndex];
    if (com === "가위") { // 하드코딩
        alert("비겼습니다");
    } else if (com === "바위") {
        alert("졌습니다");
    } else {
        alert("이겼습니다");
    }
}

var rockEl = document.getElementById("rock");
rockEl.onclick = function() {
    var com = items[currentIndex];
    if (com === "가위") {
        alert("이겼습니다");
    } else if (com === "바위") {
        alert("비겼습니다");
    } else {
        alert("졌습니다");
    }
}

var paperEl = document.getElementById("paper");
paperEl.onclick = function() {
    var com = items[currentIndex];
    if (com === "가위") {
        alert("졌습니다");
    } else if (com === "바위") {
        alert("이겼습니다");
    } else {
        alert("비겼습니다");
    }
}