$ touch ./build/dev-server.js

const bodyParser = require("body-parser");
module.exports = app => {
    app.use(bodyParser.json())
    //TODO : 이 부분 뒤로 API 구현을 추가
}
