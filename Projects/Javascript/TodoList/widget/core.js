var WidgetDict = {};

export function hasControl(id) {
  return WidgetDict.hasOwnProperty(id);
}

export function getControl(id) {
  return WidgetDict[id];
}

export function getControls(id) {
  Object.keys(WidgetDict).filter(function (item) { return item.split('_')[0] == id; });
}

export function delControl(id) {
  delete WidgetDict[id];
}

export function addControl(id, control) {
  WidgetDict[id] = control;
}
