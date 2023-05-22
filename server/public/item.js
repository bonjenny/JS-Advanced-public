function Item(name) {
    // 버튼 만들기
    var buttonEl = document.createElement("button");
    buttonEl.textContent = name;

    document.getElementById("item-buttons").append(buttonEl);

    // 클릭 이벤트 핸들링
    buttonEl.onclick = function() {
        //
    }
}