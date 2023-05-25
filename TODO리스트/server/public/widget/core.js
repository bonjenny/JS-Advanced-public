var controls = [];
// var controls = {};

export function addControl(control) {
  controls.push(control);
}

export function removeControl(control) {
  controls.splice(controls.indexOf(control), 1);
}

export function getControl(id) {
  return controls.find((control) => control.id === id);
}
