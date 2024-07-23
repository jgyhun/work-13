const { response } = require('express');
const {Post,Comment} =require('../models');
const comment = require('../models/comment');

exports.createPost = async (req,res) =>{
    try{
        const {title,content} = req.body
        const result = await Post.create({title, content})
        res.json({result:true, response:result});
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};

exports.createComemt = async (req,res) =>{
    try{
        const {comment, postId} = req.body;
        const result = await Comment.create({ postId, comment});
        res.json({result:true, response:result});
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};

exports.all = async (req,res) =>{
    try{
        const result = await Post.findAll({
            arributes: ['title','id'],
    
    
        });
        res.json({result:true,response: result});
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
 
};

exports.getPost = async (req ,res) =>{
    try{
        const { id } = req.params
        const result = await Post.findPkBy(id,{
            attributes: ['title','comment'],
            include: [{model:Comment}],

        });
        res.json({result:true,response:result})
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};