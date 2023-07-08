import App from "./App";

new App({
  $target:
    document.querySelector(".App") ||
    window.Widget.element("main", { class: "App" }),
});
