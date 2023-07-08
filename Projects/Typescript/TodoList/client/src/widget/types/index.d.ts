import { Control, WidgetOption } from "../widget/src/baseWidget";

// index.d.ts
export {};

interface Widget {
  fragment: (elName: string, option: WidgetOption) => any;
  element: (elName: string, option: WidgetOption) => any;
  todoItem: (elName: string, option: WidgetOption) => any;
  todoList: (elName: string, option: WidgetOption) => any;
  get: (id: string) => Control;
}

declare global {
  interface Window {
    Widget: Widget;
  }
}
