const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;
//세팅
app.set('view engine', 'ejs');
app.use(express.json());
//라우터
const pageRouter = require("./routes/page");
app.use('/', pageRouter);

const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

const userRouter = require('./routes/user');
app.use('/api/user', userRouter);

//404
app.use('*', (req, res) => {
    res.status(404).render('404');
});
//앞 404: 404 not found 오류 메시지,  뒤 404:views폴더의  404.ejs 파일 실행
//테이블 싱크
//force:true  항상 테이블을 삭제 후 재생성
//force:false(기본값)  테이블이 존재하면 패스, 없으면 생성
db.sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});







