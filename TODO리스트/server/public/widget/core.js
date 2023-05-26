var controls = {};

export function hasControl(id) {
  return controls.hasOwnProperty(id);
}

export function getControl(id) {
  return controls[id];
}

export function addControl(control) {
  controls[control.id] = control;
}

export function removeControl(id) {
  delete controls[id];
}
