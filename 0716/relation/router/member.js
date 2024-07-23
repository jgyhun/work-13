const express = require('express');
const { singup,login,find } = require("../controller/member");
const router = express.Router();

router.post('/signup',singup);
router.post('/login',login);
router.get('/info/:id',find)

module.exports = router;