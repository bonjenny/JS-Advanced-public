import todoItemDatas from "../../todoItemDatas";
import {
  addControl,
  delControl,
  getControl,
  hasControl,
  removeNode,
} from "./core";

export function rawWidget(
  _createControl: (elName: string, option: WidgetOption) => Control
) {
  const createControl = function (elName: string, option: WidgetOption) {
    if (option.id === undefined || option.id === "") {
      option.id =
        elName.toString() + "_" + Math.random().toString(36).substring(2, 16);
    }

    if (hasControl(option.id)) {
      option.id = option.id + "_" + Math.random().toString(36).substring(2, 16);
    }

    const control: Control = _createControl(elName, option);

    control.append = function (childControl: Control) {
      control.getEl().append(childControl.getEl());
      return getControl(option.id || elName);
    };

    control.remove = function (id: string) {
      removeNode(control.getEl());
      delControl(id);
    };

    addControl(control.id, control);

    if (option.parent !== undefined) {
      option.parent.append(control.getEl());
    }

    return control;
  };

  return createControl;
}

export interface WidgetOption {
  id?: string;
  class?: string;
  name?: string;
  style?: string;
  innerText?: string;
  value?: string;
  type?: string;
  checked?: boolean;
  min?: string;
  max?: string;
  step?: string;
  onInput?: (event: Event) => void;
  onClick?: (event: MouseEvent) => void;
  onChange?: (event: Event) => void;
  onSubmit?: (event: Event) => void;
  onBlur?: (event: FocusEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyPress?: (event: KeyboardEvent) => void;
  colSpan?: number;
  src?: string;
  href?: string;
  parent?: ExtendedHTMLElement;
  datas?: todoItemDatas[];
  columns?: WidgetOption;
}

export interface Control {
  id: string;
  getEl: () => ExtendedHTMLElement | DocumentFragment;
  focus?: () => void;
  setValue?: (value: string) => void;
  innerHTML?: (html: string) => void;
  append?: (childControl: Control) => void;
  remove?: (id: string) => void;
  reload?: (datas: todoItemDatas[]) => void;
}

export interface ExtendedHTMLElement extends HTMLElement {
  name?: string | undefined;
  value?: string | undefined;
  type?: string | undefined;
  checked?: boolean | undefined;
  min?: string | undefined;
  max?: string | undefined;
  step?: string | undefined;
  colspan?: number | undefined;
  src?: string | undefined;
  href?: string | undefined;
}
