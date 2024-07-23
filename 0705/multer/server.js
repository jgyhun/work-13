const express = require('express');
const multer = require('multer');
const path = require('path');
const { title } = require('process');
const app = express()
const PORT = 8000;

// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

app.set('view engine','ejs');
//정적파일설정
//http://localhost:8000/uploads 파일명
app.use('/uploads',express.static(__dirname + '/uploads'));

// const upload = multer({
//     dest: 'upload/',
// });

//multer세부설정
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStroage: 파일을 저장하기 위한 모든 제어기능 제공(파일 저장 관련 설정)
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/');
        },
        //filename: 파일 이름 결정(요청객체, 업로드괸 파일객체, 콜백함수)
        filename(req,file,done){
            //확장자 추출
            const ext = path.extname(file.originalname);
            //파일 이름 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null,newName);
        },
    }),
    limits: {fileSize: 1024 * 1024 * 5},
});
// 방법 2

// const storage = multer({
    
//         destination(req,file,done){
//             done(null,'/uploads');
//         },
//         filename(req,file,done){
//             const ext = path.extname(file.originalname);
//             const newName = path.basename(file.originalname, ext) + Date.now() + ext;
//             done(null,newName);
//         },
// });
// limits: {fileSize: 1024 * 1024 * 5},
// const 

//router
//=======페이지
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/submit',(req,res)=>{
    res.render('submit');
})

app.get('/func',(req,res)=>{
    res.render('func');
})

//=======요청, 응답 데이터
//싱글: single()
app.post('/upload',uploadDetail.single('userfile'),(req,res)=>{
    console.log('file',req.file);
    console.log('file',req.body);
});

app.post('/upload/array',uploadDetail.array('userfiles'),(req,res)=>{
    console.log('files',req.files);
    console.log('title',req.body);
})

app.post('/upload/fields',uploadDetail.fields([{name:'userfile1'},{name:'userfile2'}]),(req,res)=>{
    console.log('files',req.files);
    console.log('title',req.body);
})

app.post("/upload/axios",uploadDetail.single('userfile'),(req,res)=>{
    const file = encodeURIComponent(res.file.path);
    res.json({file: req.file,title: req.body});
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});