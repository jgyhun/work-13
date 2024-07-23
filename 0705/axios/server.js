const express = require('express')
const app = express;
const PORT = 8000;

// app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/get',(req,res)=>{
    res.render('get')
})
app.post('/post',(req,res)=>{
    res.render('post')
})

app.get('/resultGet',(req,res)=>{
    console.log('요청값',req.query);
    res.json({response: req.query});
});

const id ='kdt13';
const pw = '1234';
app.post('/resultPost',(req,res) =>{
    console.log('요청값',req.body);
    const {id:reqId,pw: reqPw} = req.body;
    if(id === reqId && pw === reqPw){
        res.json({result:true, userId: id});
    }else{
        res.json({result:false, userId: null})
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})