import { Control, rawWidget, WidgetOption } from "../baseWidget";

function _createFragment(elName: string, option: WidgetOption) {
  var el = document.createDocumentFragment();

  const control: Control = {
    id: option.id || "",
    getEl: function () {
      return el;
    },
  };

  return control;
}

export var createFragment = rawWidget(_createFragment);
