import { game } from "./game.js";

export class PickingButton {
  constructor({
    $target, initialState, name,
  }) {
    this.state = initialState;
    this.name = name;
    this.$element = document.createElement('button');
    this.$element.className = 'PickingButton';
    this.$element.textContent = name;

    $target.appendChild(this.$element);

    this.render = () => {
      var _self = this;
      this.$element.onclick = () => {
        game(_self);
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