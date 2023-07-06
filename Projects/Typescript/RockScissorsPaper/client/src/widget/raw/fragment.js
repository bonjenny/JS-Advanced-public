import { rawWidget } from "../baseWidget.js";

function _createFragment(elName, option) {
  var el = document.createDocumentFragment();

  return {
    id: option.id,
    getEl: function () {
      return el;
    },
  };
}

export var createFragment = rawWidget(_createFragment);
