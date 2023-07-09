import { PickingButton } from "./PickingButton";
import { Queue } from "./Queue";
import { Game } from "./Game";
import { ExtendedHTMLElement } from "./widget/src/baseWidget";

export default class App {
  state: {
    divPickingBtnsElmn: ExtendedHTMLElement;
    items: Queue;
    computerCurrentData: PickingButton | undefined;
    timerId: null;
  };
  setState: (nextState: any) => void;
  render: () => void;

  constructor({ $target }: { $target: ExtendedHTMLElement }) {
    this.state = {
      divPickingBtnsElmn: window.Widget.element("div", {
        id: "divPickingBtns",
      }).getEl(),

      items: new Queue({
        scissors: new PickingButton({
          name: "가위",
          $target: window.Widget.get("divPickingBtns").getEl(),
        }),
        rock: new PickingButton({
          name: "바위",
          $target: window.Widget.get("divPickingBtns").getEl(),
        }),
        paper: new PickingButton({
          name: "보",
          $target: window.Widget.get("divPickingBtns").getEl(),
        }),
      }),
      computerCurrentData: undefined,
      timerId: null,
    };

    Game.setState({
      items: this.state.items,
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

      window.Widget.element("button", {
        id: "btnStart",
        innerText: "게임 시작",
        parent: $target,
      });

      window.Widget.element("div", {
        id: "divComputerData",
        innerText: "시작 버튼을 눌러주세요",
        parent: $target,
      });

      $target.append(this.state.divPickingBtnsElmn);

      this.state.items.forEach((item) => item.disabled(true));

      window.Widget.get("btnStart").getEl().onclick = () => {
        window.Widget.get("btnStart").getEl().setAttribute("disabled", "true");
        this.state.items.forEach((item) => item.disabled(false));

        this.setState({
          computerCurrentData: this.state.items.getAll()[0],
          timerId: setInterval(() => {
            this.setState({
              computerCurrentData: this.state.items.getNext(
                this.state.computerCurrentData
              ),
            });
            window.Widget.get("divComputerData").updateContent(
              this.state.computerCurrentData !== undefined
                ? this.state.computerCurrentData.state.name
                : ""
            );
          }, 100),
        });
      };
    };
    this.render();
  }
}
