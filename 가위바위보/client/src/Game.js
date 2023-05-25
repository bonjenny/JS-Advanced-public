export class Game {
  static state = {
    items: [],
    btnStartElmn: undefined,
    computerCurrentData: undefined,
    timerId: undefined,
    startGame: (item) => {
      8
      var next = Game.state.items.getNext(item);
      if (item === Game.state.computerCurrentData) {
        alert("비겼습니다");
      } else if (next === Game.state.computerCurrentData) {
        alert("졌습니다");
      } else {
        alert("이겼습니다");
      }
      clearInterval(Game.state.timerId);

      Game.state.btnStartElmn.removeAttribute('disabled');
      Game.state.items.forEach(item => item.disabled(true));
    }
  }

  static setState = (nextState) => {
    Game.state = {
      ...this.state,
      ...nextState
    };
  }

  constructor() {
  }
}