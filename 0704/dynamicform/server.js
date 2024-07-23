const express =require('express')
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

//요청과 응답
//ajax
app.get('/ajax',(req,res) => {
    console.log('요청값',req.query);
    const {username, email} =req.query;
    res.send({user: `${username}님`, email: `이메일 주소는 ${email}`});
});
app.post('/ajax',(req,res)=>{
    console.log('요청값',res.body);
    const{username,email} =req.body;
    res.send({user: `${username}님`,email: `이메일 주소는 ${email}`})
})

//axios
app.get('/axios',(req,res)=>{
    console.log('요청값',req.query);
    const {username,email}=req.query;
    //응답
    const data ={
        result:true,
        username,
        email
    }
    res.json(data);
})
app.post('/axios',(req,res)=>{
    console.log('요청값', req.body);
    const {username,email} = req.body;
    const value ={
        result:true,
        username,
        email
    }
    res.json(value);
});

app.get('/fetch',(req,res)=>{
    console.log('요청값',req.query);
    const {username,email}=req.query;
    //응답
    const value ={
        result:true,
        username,
        email
    }
    res.json(value);
})
app.post('/fetch',(req,res)=>{
    console.log('요청값',req.body);
    const {username,email}=req.body;
    //응답
    const value ={
        result:true,
        username,
        email
    }
    res.json(value);

})
//use는 http 전송 방식을 이해하지 못함
//같은 url로 get,post등 을 만들수 있지만 use로는 접근이 불가
//위처럼 get의 /axios와 post의 /axios는 다른 통신이지만
//use는 동인한 페이지로 인식
app.use('*',(req,res)=>{
    res.render('404')
})
//복습
/** 
 *  render():뷰페이지렌더링, render(뷰페이지이름, 데이터(선택))
 *  send(): 모든 타입 데이터 전송(문자열, 배열, 객체, 숫자 등)
 *  json(): 객체타입 데이터 전송
*/

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})