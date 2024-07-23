const express = require('express')
const {signup,login,info,updateFunc,deleteFunc} = require("../controller/user")
const router = express.Router();

//회원가입
router.post("/signup",signup);
//로그인
router.post('/login',login);
//회원 하나 조회 
router.get("/info/:id", info);
// 회원 하나 수정
router.patch("/update",updateFunc);
// 회원 하나 삭제
router.delete("/delete",deleteFunc);

module.exports = router;