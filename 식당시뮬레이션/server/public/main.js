function Menu(name, time) {
  this.name = name;
  this.time = time;
}

function orderAsync(menu, chef) {
  return new Promise(function findServer(resolve) {
    orders.splice(orders.indexOf(menu), 1);
    cookings.push(menu);
    renderOrders();
    renderCookings();
    resolve(chef);
  });
}

function Chef() {
  this.status = "ready"; // or cooking
}
Chef.prototype.isAvailable = function () {
  return this.status === "ready";
}
Chef.prototype.cookAsync = function (menu) {
  var chef = this;
  chef.status = "cooking";
  return new Promise(function (resolve) {
    setTimeout(function () {
      cookings.splice(cookings.indexOf(menu), 1);
      servings.push(menu);
      renderCookings();
      renderCookings();
      chef.status = "ready";
      resolve();
    }, menu.time);
  });
}

function findChefAsync() {
  return new Promise(function findChef(resolve) {
    var chef = chefs.find(chef => chef.isAvailable());
    if (chef === undefined) {
      setTimeout(() => {
        findChef(resolve);
      }, 500);
    } else {
      resolve(chef);
    }
  });
}

function Server(serveTime) {
  this.status = "ready"; // or serving
  this.serveTime = serveTime;
}
Server.prototype.isAvailable = function () {
  return this.status === "ready";
}
Server.prototype.serveAsync = function (menu) {
  var server = this;
  server.status = "serving";
  return new Promise(function (resolve) {
    setTimeout(function () {
      servings.splice(cookings.indexOf(menu), 1);
      renderServings();
      server.status = "ready";
      resolve();
    }, server.serveTime);
  });
}

function findServerAsync() {
  return new Promise(function findServer(resolve) {
    var server = servers.find(server => server.isAvailable());
    if (server === undefined) {
      setTimeout(() => {
        findServer(resolve);
      }, 500);
    } else {
      resolve(server);
    }
  });
}
// 바로 처리되는게아니면 async를 관습적으로 붙임
// 그래야 await new Chef().cookAsync 이런식으로 await나 .then을 붙임


var orders = [];
var cookings = [];
var servings = [];
var chefs = [new Chef(), new Chef()];
var servers = [new Server(1000), new Server(2000)];

function render(list, listName) {
  var ulEl = document.getElementById(listName);
  ulEl.innerHTML = "";

  list.forEach(function (order) {
    var liEl = document.createElement("li");
    liEl.textContent = order.name;
    ulEl.append(liEl);
  });
}

function renderOrders() {
  render(orders, "orders");
}

function renderCookings() {
  render(cookings, "cookings");
}

function renderServings() {
  render(servings, "servings");
}

document.getElementById("sundae").onclick = function () {
  run(new Menu("순댓국", 1000));
}

document.getElementById("haejang").onclick = function () {
  run(new Menu("해장국", 2000));
}

// 주문, 요리, 서빙의 메인 프로세스는 이 함수에서 전부 처리되어야 함
// 화면이 뻗으면 안됨
function run(menu) {
  // 주문 목록에 추가, 출력
  orders.push(menu);
  renderOrders();

  // 대기중인 요리사 찾기 (요리사가 있을 때까지 "대기"해야 함) - 함수로 따로 빼서 처리하지 말기,
  // 가급적이면 promise로 처리
  findChefAsync()
    .then(function (chef) {
      return orderAsync(menu, chef);
    })
    .then(function (chef) {
      // 대기 상태인 chef가 넘어옴
      // 요리사에게 요리 시킴 (요리하는 데 시간이 걸리므로 "대기"해야 함)
      // -- 요리 목록으로 넘어가야 함
      return chef.cookAsync(menu);
    })
    // 서빙을 시킴
    // -- 서빙 목록으로 넘어가야 함
    .then(function () {
      return findServerAsync();
    })
    .then(function (server) {
      server.serveAsync(menu);
    })
}