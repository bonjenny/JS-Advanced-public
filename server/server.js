// cd server && npm install express
// 위에 문구 터미널 실행 필요
// https://expressjs.com/ko/starter/static-files.html > 시작하기 > 정적 파일 참고
var express = require('express');
var app = express();
var port = 3000;

// public 폴더의 정적 파일을 서비스
app.use(express.static('public'));
// index.html을 내려줌

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// server 폴더에서
// node main.js
// 치면 서버가 열림 (127.0.0.1:3000)
// 터미널에서 Ctrl+C하면 서버가 꺼짐