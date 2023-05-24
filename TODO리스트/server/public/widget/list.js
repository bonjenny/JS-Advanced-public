import { addControl } from "./core";

export function createList(
  id, { datas, columns }
) {
  var el = document.createElement("ul");
  el.id = id;
  el.style.listStyle = "none";
  el.style.padding = "0";

  render(datas, columns);

  var control = {
    el: el,
    reload: function (datas) {
      el.innerHTML = "";
      render(datas, columns);
    }
  };
  addControl(control);
  return control;

  function render(datas, columns) {
    datas.forEach(function (data) {
      var liEl = document.createElement("li");
      columns.forEach(function (column) {
        var control = column.render(data);
        liEl.append(control);
      });
      el.append(liEl);
    })
  }
}