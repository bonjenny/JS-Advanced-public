import { addControl, delControl, getControl, hasControl } from "./core.js";

export function rawWidget(_createControl) {
  var createControl = function (elName, option) {

    if (option.id === undefined) {
      option.id = elName.toString() + '_' + Math.random().toString(36).substring(2, 16);
    }

    if (hasControl(option.id)) {
      option.id = option.id + '_' + Math.random().toString(36).substring(2, 16);
    }

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

    if (option.parent !== undefined) {
      option.parent.append(control.getEl());
    }

    return control;
  };

  return createControl;
}