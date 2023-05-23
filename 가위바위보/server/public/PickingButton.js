export class PickingButton {
    constructor({
        $target, initialState, name, onClick
    }) {
        this.$element = document.createElement('button');
        this.$element.className = 'PickingButton';
        this.$element.textContent = name;
        this.name = name;
        this.onClick = onClick;

        $target.appendChild(this.$element);

        this.render = () => {
            var _self = this;
            this.$element.onclick = () => {
                PickingButton.prototype.onClick(_self);
            };
        };
        this.render();
    }

    disabled(value) {
        value == true ?
            this.$element.setAttribute('disabled', true) :
            this.$element.removeAttribute('disabled');
    }
}

PickingButton.prototype.onClick = () => PickingButton.onClick;