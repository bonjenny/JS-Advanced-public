export class PickingButton {
    constructor({
        key, name, onClick
    }) {
        this.key = key;
        this.name = name;
        this.$element = document.createElement('button');
        this.$element.className = 'PickingButton';
        this.$element.textContent = name;

        var _self = this;
        this.$element.onclick = () => {
            onClick(_self);
        }
    }

    render($target) {
        $target.appendChild(this.$element);
    }

    disable(value) {
        value == true ?
            this.$element.setAttribute('disabled', true) :
            this.$element.removeAttribute('disabled');
    }
}


