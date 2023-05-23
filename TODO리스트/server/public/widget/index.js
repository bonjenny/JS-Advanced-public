import { createDiv } from "./div";
import { createButton } from "./button";
import { createInput } from "./input";
import { createList } from "./list";

window.Widget = {
    controls: [],
    div: createDiv,
    button: createButton,
    input: createInput,
    list: createList,
    addControl: function(control) {
        this.controls.push(control);
    },
    getControl: function(id) {
        return this.controls.find(control => control.id === id);
    }
};