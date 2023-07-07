import { handleOrderBtnClick } from "./util/utils";
import { ExtendedHTMLElement } from "./widget/src/baseWidget";

export default class App {
  state: {};
  setState: (nextState: any) => void;
  render: () => void;

  constructor({ $target }: { $target: ExtendedHTMLElement }) {
    this.state = {};

    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState,
      };
    };

    this.render = () => {
      const appChild = window.Widget.fragment("", { parent: $target }).getEl();

      window.Widget.element("h1", {
        innerText: "식당 시뮬레이션",
        parent: appChild,
      });

      window.Widget.element("button", {
        id: "sundaeBtn",
        innerText: "순댓국",
        onClick: () => handleOrderBtnClick("순댓국", 2000),
        parent: appChild,
      });

      window.Widget.element("button", {
        id: "haejangBtn",
        innerText: "해장국",
        onClick: () => handleOrderBtnClick("해장국", 3000),
        parent: appChild,
      });

      window.Widget.element("h3", {
        innerText: "주문",
        parent: appChild,
      });
      window.Widget.element("ul", {
        id: "orderUl",
        parent: appChild,
      });

      window.Widget.element("h3", {
        innerText: "요리중",
        parent: appChild,
      });
      window.Widget.element("ul", {
        id: "cookingUl",
        parent: appChild,
      });

      window.Widget.element("h3", {
        innerText: "요리완료",
        parent: appChild,
      });
      window.Widget.element("ul", {
        id: "cookedUl",
        parent: appChild,
      });

      window.Widget.element("h3", {
        innerText: "서빙중",
        parent: appChild,
      });
      window.Widget.element("ul", {
        id: "servingUl",
        parent: appChild,
      });

      $target.appendChild(appChild);
    };
    this.render();
  }
}
