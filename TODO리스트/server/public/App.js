import { PickingButton } from "./PickingButton.js";
import { Queue } from "./Queue.js";
import { game } from "./game.js";

export default class App {
    constructor({ $target }) {
        this.state = {
            btnStart: document.getElementById("btnStart"),
            divPickingBtns: document.getElementById("divPickingBtns"),
            items: new Queue({
                scissors: new PickingButton({
                    $target: divPickingBtns,
                    name: "가위",
                    onClick: game
                }),
                rock: new PickingButton({
                    $target: divPickingBtns,
                    name: "바위"
                }),
                paper: new PickingButton({
                    $target: divPickingBtns,
                    name: "보"
                })
            })
        };

        this.setState = (nextState) => {
            this.state = {
                ...this.state,
                ...nextState
            };
        };

        this.render = () => {
            this.state.items.forEach(item => item.disabled(true));
            this.state.btnStart.onclick = () => {
                this.state.btnStart.setAttribute('disabled', true);
                this.state.items.forEach(item => item.disabled(false));
            };
        }
        this.render();
    }
}