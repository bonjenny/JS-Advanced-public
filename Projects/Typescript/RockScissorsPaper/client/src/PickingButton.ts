import { ExtendedHTMLElement } from "./widget/src/baseWidget";

export class PickingButton {
  static state = {
    onClick: (arg0: PickingButton) => {},
  };
  static setState = (nextState: any) => {
    PickingButton.state = {
      ...PickingButton.state,
      ...nextState,
    };
  };

  state: {
    $element: ExtendedHTMLElement;
    name: string;
    onClick: (arg0: any) => void;
  };
  setState: (nextState: any) => void;
  render: () => void;

  constructor({
    $target,
    name,
  }: {
    $target: ExtendedHTMLElement | DocumentFragment;
    name: string;
  }) {
    this.state = {
      $element: window.Widget.fragment("", {}),
      name: name,
      onClick: (item: any) => {},
    };

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState,
      };
    };

    this.state.$element = window.Widget.element("button", {
      class: "PickingButton",
      innerText: this.state.name,
    }).getEl();
    $target.appendChild(this.state.$element);

    this.render = () => {
      var _self = this;
      this.state.$element.onclick = () => {
        PickingButton.state.onClick(_self);
      };
    };
    this.render();
  }

  disabled(value: boolean) {
    value == true
      ? this.state.$element.setAttribute("disabled", "true")
      : this.state.$element.removeAttribute("disabled");
  }
}
