import { Control, ExtendedHTMLElement } from "./baseWidget";

interface WidgetDictionary {
  [key: string]: any;
}

var WidgetDict: WidgetDictionary = {};

export function hasControl(id: string): boolean {
  return WidgetDict.hasOwnProperty(id);
}

export function getControl(id: string): Control {
  if (WidgetDict[id] !== undefined) {
    return WidgetDict[id];
  }
  const control: Control = {
    id: id,
    getEl: function () {
      return document.createDocumentFragment();
    },
  };
  return control;
}

export function getControls(id: string): string[] {
  return Object.keys(WidgetDict).filter(function (item) {
    return item.split("_")[0] == id;
  });
}

export function delControl(id: string): void {
  delete WidgetDict[id];
}

export function addControl(id: string, control: Control): void {
  WidgetDict[id] = control;
}

export function removeNode(node: ExtendedHTMLElement | DocumentFragment) {
  if (node instanceof DocumentFragment) {
    if (node.parentElement) {
      node.parentElement.removeChild(node);
    }
  } else {
    node.remove();
  }
}
