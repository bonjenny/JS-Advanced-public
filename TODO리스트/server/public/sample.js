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

// function loadJson(url) {
//   return fetch(url) // fetch는 promise를 반환
//     .then(response => response.json()); // 자동으로 resolve
// }

// function loadGithubUser(name) {
//   return fetch(`https://api.github.com/users/${name}`)
//     .then(response => response.json());
// }

// function showAvatar(githubUser) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// // 함수를 이용하여 다시 동일 작업 수행
// loadJson('/article/promise-chaining/user.json')
//   .then(user => loadGithubUser(user.name)) // then 구문 안 비동기처리
//   .then(showAvatar) // 이미지를 다운받는 데 시간이 걸림
//   .then(githubUser => alert(`Finished showing ${githubUser.name}`));