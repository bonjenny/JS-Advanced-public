export function Item(key, name, onClick) {
    this.key = key;
    this.name = name;

    // 버튼 만들기 => 외부에 감춰야 함(private)
    this.buttonEl = document.createElement("button");
    this.buttonEl.textContent = name;

    // 클릭 이벤트 핸들링
    var _self = this;
    this.buttonEl.onclick = function() {
        onClick(_self); // 여기서 this는 this.buttonEl(호출하는 애)
    };
    // this.buttonEl.onclick = onClick; // this가 달라짐
}

Item.prototype.render = function (parentEl) {
    parentEl.append(this.buttonEl); // 여기서 this는 item(호출하는 애)
};

Item.prototype.disable = function (value) {
    value == true ? 
        this.buttonEl.setAttribute('disabled', true) : 
        this.buttonEl.removeAttribute('disabled');
}

// private으로 만드는 법
// class Item {
//     priavte
// }