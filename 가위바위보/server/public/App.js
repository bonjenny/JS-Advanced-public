import { PickingButton } from "./PickingButton.js";
import { Queue } from "./Queue.js";
import { Game } from "./Game.js";

export default class App {
  constructor({ $target }) {
    this.state = {
      btnStartElmn: document.getElementById("btnStart"),
      divComputerDataElmn: document.getElementById("computerData"),
      divPickingBtns: document.getElementById("divPickingBtns"),
      computerCurrentData: undefined,
      timerId: null,
      items: new Queue({
        scissors: new PickingButton({
          $target: divPickingBtns,
          name: "가위",
        }),
        rock: new PickingButton({
          $target: divPickingBtns,
          name: "바위",
        }),
        paper: new PickingButton({
          $target: divPickingBtns,
          name: "보",
        }),
      }),
    };

    Game.setState({
      items: this.state.items,
      btnStartElmn: this.state.btnStartElmn,
    })

    PickingButton.setState({
      onClick: Game.state.startGame,
    });

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState,
      };
      Game.setState({
        computerCurrentData: this.state.computerCurrentData,
        timerId: this.state.timerId,
      })
    };

    this.render = () => {
      this.state.items.forEach(item => item.disabled(true));

      this.state.btnStartElmn.onclick = () => {
        this.state.btnStartElmn.setAttribute('disabled', true);
        this.state.items.forEach(item => item.disabled(false));

        this.setState({
          computerCurrentData: this.state.items.getAll()[0],
          timerId: setInterval(() => {
            this.setState({
              computerCurrentData: this.state.items.getNext(this.state.computerCurrentData),
            });
            this.state.divComputerDataElmn.textContent = this.state.computerCurrentData.state.name;
          }, 100),
        });
      };
    }
    this.render();
  }
}