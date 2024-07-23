const express = require("express");
const app =express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/getPage',(req,res)=>{
    res.render('get');
})

app.get('/postPage',(req,res)=>{
    res.render('post');
})
app.get('/resultGet',(req,res)=>{
    console.log(req.query);
    const {username, gender, year, month,day,hobby} = req.query;
    res.render('result',{
        title: 'GET전송 결과',
        userInfo:{
            username,
            gender,
            year,
            month,
            day,
            hobby,
            color:{result: false, color:null},
            number:{result: false, number:null},
        },
    });
});

app.post('/resultPost',(req,res)=>{
    console.log(req.body);
    const {username, gender, year, month,day,hobby,color,number} = req.body;
    res.render('result',{
        title: 'POST전송 결과',
        userInfo:{
            username,
            gender,
            year,
            month,
            day,
            hobby,
            color:{ result: true, color: color },
            number:{ result: true, number: number },
        },
    });
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
});