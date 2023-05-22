import { PickingButton } from "./PickingButton.js";
import { Queue } from "./Queue.js";
// import { game } from "./game.js";

export default function App({ $target }) {
    this.state = {
        divPickingBtns: document.getElementById("divPickingBtns"),
        items: new Queue({
            scissors: new PickingButton({
                $target: divPickingBtns,
                name: "가위",
                onClick: game
            }),
            rock: new PickingButton({
                $target: divPickingBtns,
                name: "바위",
                onClick: game
            }),
            paper: new PickingButton({
                $target: divPickingBtns,
                name: "보",
                onClick: game
            })
        }),
        game(item) {
            const next = items.getNext(item);
            if(item === ) {
                alert("비겼습니다");
            } else if (next === ) {
                alert("졌습니다");
            } else {
                alert("이겼습니다");
            }
        }
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        };
    }
}