import { hasControl, getControl, addControl, removeControl } from "./core";

export function widget(creator) {
  return function () {
    var control = creator.apply(null, arguments);
    if (hasControl(id))
      throw new Error(`ID 중복 불가: ${control.id}가 이미 존재합니다.`);

    control.remmove = function () {
      control.children.forEach((child) => {
        child.getEl().remove();
        removeControl(child.id);
      });
      removeControl(control.id);
    };

    addControl(control);
    return control;
  };
}
