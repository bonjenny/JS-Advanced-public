import { PickingButton } from "./PickingButton";
import { Queue } from "./Queue";
import { Game } from "./Game";
import { ExtendedHTMLElement } from "./widget/src/baseWidget";

export default class App {
  state: {
    btnStartElmn: ExtendedHTMLElement;
    divComputerDataElmn: ExtendedHTMLElement;
    divPickingBtnsElmn: ExtendedHTMLElement;
    computerCurrentData: any;
    timerId: null;
    items: Queue;
  };
  setState: (nextState: any) => void;
  render: () => void;

  constructor({ $target }: { $target: ExtendedHTMLElement }) {
    this.state = {
      btnStartElmn: window.Widget.element("button", {
        id: "btnStart",
        innerText: "게임 시작",
      }).getEl(),

      divComputerDataElmn: window.Widget.element("div", {
        id: "computerData",
        innerText: "시작 버튼을 눌러주세요",
      }).getEl(),

      divPickingBtnsElmn: window.Widget.element("div", {
        id: "divPickingBtnsElmn",
      }).getEl(),

      computerCurrentData: undefined,

      timerId: null,

      items: new Queue({
        scissors: new PickingButton({
          $target: window.Widget.get("divPickingBtnsElmn").getEl(),
          name: "가위",
        }),
        rock: new PickingButton({
          $target: window.Widget.get("divPickingBtnsElmn").getEl(),
          name: "바위",
        }),
        paper: new PickingButton({
          $target: window.Widget.get("divPickingBtnsElmn").getEl(),
          name: "보",
        }),
      }),
    };

    Game.setState({
      items: this.state.items,
      btnStartElmn: this.state.btnStartElmn,
    });

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
      });
    };

    this.render = () => {
      window.Widget.element("h1", {
        innerText: "가위바위보게임",
        parent: $target,
      });
      $target.appendChild(this.state.btnStartElmn);
      $target.appendChild(this.state.divComputerDataElmn);
      $target.appendChild(this.state.divPickingBtnsElmn);

      this.state.items.forEach((item) => item.disabled(true));

      this.state.btnStartElmn.onclick = () => {
        this.state.btnStartElmn.setAttribute("disabled", "true");
        this.state.items.forEach((item) => item.disabled(false));

        this.setState({
          computerCurrentData: this.state.items.getAll()[0],
          timerId: setInterval(() => {
            this.setState({
              computerCurrentData: this.state.items.getNext(
                this.state.computerCurrentData
              ),
            });
            this.state.divComputerDataElmn.textContent =
              this.state.computerCurrentData.state.name;
          }, 100),
        });
      };
    };
    this.render();
  }
}
