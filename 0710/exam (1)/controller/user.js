const userModel = require('../model/user');

const main = (req, res) => {
    res.render('index');
};

const get = (req, res) => {
    res.render('get');
};

const post = (req, res) => {
    res.render('post');
};

const resultGet = (req, res) => {
    console.log('요청값', req.query);
    // const abc = {
    //     response: req.query,
    // };
    res.json({ response: req.query });
};

const resultPost = (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (userModel[0].userid === reqId && userModel[0].userpw === reqPw) {
        res.json({ result: true, userId: userModel[0].userid });
    } else {
        res.json({ result: false, userId: null });
    }
};

module.exports = { main, get, post, resultGet, resultPost };
