import { widget } from "./baseWidget";

function _createList(
  id, { datas, columns }
) {
  var el = document.createElement("ul");
  el.id = id;
  el.style.listStyle = "none";
  el.style.padding = "0";

  render(datas, columns);

  return {
    el: el,
    reload: function (datas) {
      el.innerHTML = "";
      render(datas, columns);
    }
  };

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

export var createList = widget(_createList);