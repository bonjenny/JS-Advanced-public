import Chef from "../class/Chef";
import Order from "../class/Order";
import Server from "../class/Server";
import { run } from "./run";

export function renderOrder(order: Order) {
  const orderUl = window.Widget.get("orderUl");
  const orderLi = window.Widget.element("li", {
    id: order.id,
    parent: orderUl.getEl(),
  });

  window.Widget.element("span", {
    id: `${order.name}-${order.id}`,
    innerText: order.name,
    parent: orderLi.getEl(),
  });
}

export function renderCooking(orderId: string, chef: Chef) {
  const cookingUl = window.Widget.get("cookingUl");
  const cookingLi = window.Widget.get(orderId);

  window.Widget.element("span", {
    id: `info-${orderId}`,
    innerText: `(${chef.name})`,
    parent: cookingLi.getEl(),
  });

  cookingUl.append(cookingLi);
}

export function renderCooked(orderId: string) {
  const cookedUl = window.Widget.get("cookedUl");
  const cookedLi = window.Widget.get(orderId);

  window.Widget.get(
    `info-${orderId}`
  ).getEl().innerText = `(server를 찾는중..)`;
  // updateContent

  cookedUl.append(cookedLi);
}

export function renderServing(orderId: string, server: Server) {
  const servingUl = window.Widget.get("servingUl");
  const servingLi = window.Widget.get(orderId);

  window.Widget.get(`info-${orderId}`).getEl().innerText = `(${server.name})`;
  // updateContent

  servingUl.append(servingLi);
}

export function removeOrder(order: Order) {
  window.Widget.get(order.id).remove(order.id);
  window.Widget.get(`${order.name}-${order.id}`).remove(order.id);
  window.Widget.get(`info-${order.id}`).remove(order.id);
}

export function handleOrderBtnClick(menu: string, second: number) {
  var orderId = crypto.randomUUID();
  run(new Order(orderId, menu, second));
}
