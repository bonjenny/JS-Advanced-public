(()=>{"use strict";function t(t,e,n){this.key=t,this.name=e,this.buttonEl=document.createElement("button"),this.buttonEl.textContent=e;var i=this;this.buttonEl.onclick=function(){n(i)}}function e(t){this.items=t}function n(t){var e=o.getNext(t);t===s?alert("비겼습니다"):e===s?alert("졌습니다"):alert("이겼습니다"),clearInterval(i),r.removeAttribute("disabled"),o.getAll().forEach((function(t){t.disable(!1)}))}t.prototype.render=function(t){t.append(this.buttonEl)},t.prototype.disable=function(t){1==t?this.buttonEl.setAttribute("disabled",!0):this.buttonEl.removeAttribute("disabled")},e.prototype.getAll=function(){return this.items},e.prototype.getNext=function(t){var e=this.items.indexOf(t);return this.items[e+1]||this.items[0]};var i,o=new e([new t("scissors","가위",n),new t("rock","바위",n),new t("paper","보",n)]),s=o.getAll()[0],r=document.getElementById("start"),l=document.getElementById("com"),u=document.getElementById("item-buttons");o.getAll().forEach((function(t){t.render(u),t.disable(!0)})),r.onclick=function(){r.setAttribute("disabled",!0),o.getAll().forEach((function(t){t.disable(!1)})),i=setInterval((function(){s=o.getNext(s),l.textContent=s.name}),100)}})();
//# sourceMappingURL=main.js.map