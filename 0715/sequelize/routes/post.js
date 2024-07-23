const express = require('express')
const {all,write, one, updateFunc,deleteFunc} = require("../controller/post")
const router = express.Router();

//get/all 전체 글 조회
router.get("/all",all)
// 글 하나 생성
router.post('/write',write)
// 글 하나 조회 
router.get("/:id", one)
// 글 하나 수정
router.patch("/update",updateFunc)
// 글 하나 삭제
router.delete("/delete",deleteFunc)

module.exports = router;