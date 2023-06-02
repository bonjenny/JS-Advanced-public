import { addControl, delControl, getControl, hasControl } from "./core.js";

export function rawWidget(_createControl) {
  var createControl = function (elName, option) {

    if (option.id === undefined) {
      option.id = elName.toString() + Math.random().toString(36).substring(2, 16);
    }

    if (hasControl(option.id)) throw new Error(`id: ${option.id}는 이미 존재`);

    var control = _createControl(elName, option);

    control.append = function (childControl) {
      control.getEl().append(childControl.getEl());
      return getControl(option.id);
    };

    control.remove = function (id) {
      control.getEl().remove();
      delControl(id);
    };

    addControl(control.id, control);

    return control;
  };

  return createControl;
}