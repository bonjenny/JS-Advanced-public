var sampleControl = Widget.button("sample", {
  label: "샘플",
  onClick: () => {
    let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
    promise.then(
      script => alert(`${script.src}을 불러왔습니다!`),
      error => alert(`Error: ${error.message}`)
    );
  }
})
document.body.append(sampleControl.el);

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

    document.head.append(script);
  });
}