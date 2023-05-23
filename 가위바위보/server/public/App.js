import { PickingButton } from "./PickingButton.js";
import { Queue } from "./Queue.js";

export default class App {
    constructor({ $target }) {
        this.state = {
            btnStartElmn: document.getElementById("btnStart"),
            divComputerDataElmn: document.getElementById("computerData"),
            divPickingBtns: document.getElementById("divPickingBtns"),
            timerId: null,
            items: new Queue({
                scissors: new PickingButton({
                    $target: divPickingBtns,
                    initialState: '',
                    name: "가위",
                }),
                rock: new PickingButton({
                    $target: divPickingBtns,
                    initialState: '',
                    name: "바위",
                }),
                paper: new PickingButton({
                    $target: divPickingBtns,
                    initialState: '',
                    name: "보",
                }),
            }),
        };

        this.setState = (nextState) => {
            this.state = {
                ...this.state,
                ...nextState
            };
        };

        this.render = () => {
            this.state.items.forEach(item => item.disabled(true));

            this.state.btnStartElmn.onclick = () => {
                this.state.btnStartElmn.setAttribute('disabled', true);
                this.state.items.forEach(item => item.disabled(false));

                let computerCurrentData = this.state.items.getAll()[0];
                this.state.timerId = setInterval(() => {
                    computerCurrentData = this.state.items.getNext(computerCurrentData);
                    this.state.divComputerDataElmn.textContent = computerCurrentData.name;
                }, 100);
            };
        }
        this.render();
    }
}