import { QueueObj } from "./Queue";

export class Game {
  static state = {
    items: new QueueObj(),
    computerCurrentData: undefined,
    timerId: undefined,
    startGame: (item: any) => {
      var next = Game.state.items.getNext(item);
      if (item === Game.state.computerCurrentData) {
        alert("비겼습니다");
      } else if (next === Game.state.computerCurrentData) {
        alert("졌습니다");
      } else {
        alert("이겼습니다");
      }
      clearInterval(Game.state.timerId);

      window.Widget.get("btnStart").getEl().removeAttribute("disabled");
      Game.state.items.forEach((item: any) => item.disabled(true));
    },
  };

  static setState = (nextState: any) => {
    Game.state = {
      ...this.state,
      ...nextState,
    };
  };

  constructor() {}
}
