var sampleControl = Widget.button("sample", {
  label: "샘플",
  onClick: function () {
    alert("샘플입니다");
  }
})
document.body.append(sampleControl.el);

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));
  document.head.append(script);
}

sampleControl.onClick = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
  if (error) return handleError(error);

  alert(`${script.src}가 로드되었습니다.`);
  alert(_); // 스크립트에 정의된 함수
});