import Chef from "../class/Chef";
import ChefList from "../class/ChefList";
import Order from "../class/Order";
import Server from "../class/Server";
import ServerList from "../class/ServerList";
import {
  renderOrder,
  renderCooking,
  renderCooked,
  renderServing,
  removeOrder,
} from "./utils";

var chefs = new ChefList([new Chef("요리사1"), new Chef("요리사2")]);
var servers = new ServerList([
  new Server("직원1", 1500),
  new Server("직원2", 3000),
]);

export function run(order: Order) {
  renderOrder(order);

  chefs
    .findChefAsync()
    .then((chef) => {
      renderCooking(order.id, chef);
      return chef.cookAsync(order);
    })
    .then(() => {
      renderCooked(order.id);
      return servers.findServerAsync();
    })
    .then((server) => {
      renderServing(order.id, server);
      return server.serveAsync();
    })
    .then(() => {
      removeOrder(order);
    });
}
