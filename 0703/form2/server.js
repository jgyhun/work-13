const express = require('express')
const app = express();
const PORT = 8000;

//뷰 엔진
app.set('view engine','ejs');
app.set("views","./views");

//미들웨어
app.use(express.urlencoded({extended:true}));
//extentded:true :qs 모듈 사용 body 데이터를 해석
//extentded:false 내장된 querystarting 모듈 사용

//라우터
app.get('/',(req,res)=>{
    res.render('form');
});

app.get("/form",(req,res)=>{
    res.render('exam');
});


app.get("/gForm",(req,res)=>{
    console.log(req.query);
    res.render('result',{title:'get 요청 결과',userInfo: req.query});
})

app.post("/pForm",(req,res)=>{
    console.log(req.body);
    res.render('result2',{title:'post 요청 결과', userInfo: req.body});
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});