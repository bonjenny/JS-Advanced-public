export class PickingButton {
  static state = {
    onClick: () => { }
  }
  static setState = (nextState) => {
    PickingButton.state = {
      ...PickingButton.state,
      ...nextState
    };
  }

  constructor({
    $target, name,
  }) {
    this.state = {
      $element: '',
      name: name,
      onClick: (item) => {
        console.log(item);
      },
    };

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState
      };
    };

    this.state.$element = document.createElement('button');
    this.state.$element.className = 'PickingButton';
    this.state.$element.textContent = this.state.name;
    $target.appendChild(this.state.$element);

    this.render = () => {
      var _self = this;
      this.state.$element.onclick = () => {
        PickingButton.state.onClick(_self);
      };
    };
    this.render();
  }

  disabled(value) {
    value == true ?
      this.state.$element.setAttribute('disabled', true) :
      this.state.$element.removeAttribute('disabled');
  }
}