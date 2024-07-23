const express = require('express');
const { createPost,createComemt,all,getPost} = require('../controller/post.js');
const router = express.Router();

//
router.post('/create',createPost)

router.post('/comment', createComemt);

router.post('/all',all);

router.post('/getpost/:id',getPost);



module.exports = router;