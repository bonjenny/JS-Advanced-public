export class PickingButton {
    constructor({
        $target, 
        initialState,
        name, 
        onClick
    }) {
        this.$element = document.createElement('button');
        this.$element.className = 'PickingButton';
        this.$element.textContent = name;
        this.name = name;

        $target.appendChild(this.$element);

        this.render = () => {
            var _self = this;
            this.$element.onclick = () => {
                onClick(_self);
            };
        };
        this.render();
    }
    
    disable = (value) => {
        value == true ?
            this.$element.setAttribute('disabled', true) :
            this.$element.removeAttribute('disabled');
    }
}