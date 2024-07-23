// const { where } = require('sequelize');
const { where } = require('sequelize');
const {User} = require('../models');
const { log } = require('console');
const { response } = require('express');

const signup = async (req,res) =>{
    const {userid,pw,name} = req.body;
    const find = await User.findOne({where:{userid}})
    if(find){
        res.json({result:false, massage:"이미 존재하는 계정"});
    }else{

        const result = await User.create({userid,pw,name});
        res.json({result: true, message:"회원가입 완료"});
    }
};

// const login = async (req,res)=>{
//     const {userid,pw} = req.body;
//     const result = await User.findOne({where:{userid,pw}})
//     if(result == null){
//         res.json({result: true, message:"로그인 성공",id: result.id})
//     }else{
//         res.json({result: false, message:"로그인 실패", id: null})
//     }
// }

const login = async (req,res)=>{
    const { userid,pw } = req.body;
    const find = await User.findOne({attributes:['username','userid']},{where:{userid}})
    console.log('find',find);
    if(find){
        if(find.pw === pw){
            const response = {
                id:find.id,
                userid: find.userid,
                name:find.name,
            };
            res.json({ result: true, code: 100, response, message: '로그인 성공' });
        } else {
            res.json({ result: false, code: 1000, response: null, message: '비밀번호 틀렸습니다.' });
        }
    } else {
        res.json({ result: false, code: 1001, response: null, message: '회원이 아닙니다.' });
    }
};

// const one = async (req,res)=>{
//     const result = await User.findOne({where:{id:req.params.id}});
//     res.json({result:true, one:result});

// }
const info = async (req,res) =>{
    //req.params.id
    const {id} = req.params;
    const {id:pkId,userid,name,pw} = await User.findByPk(id);
    console.log('find',find);
    const response ={
        userid,
        name,
        id: pkId,
        pw,
    };
    res.json({result:true, response})
};

// const updateFunc = async (req,res)=>{
//     const {id,userid,pw,name} = req.body;
//     const result = await User.update({userid,pw,name},{where:{id}})
//     res.json({result:true});
// }

const updateFunc = async (req,res) =>{
    const {id,name,pw} = req.body
    await User.update({name,pw},{where:{id}});
    res.json({result:true});
};

// const deleteFunc = async (req,res) =>{
//     const result = await User.destroy({where:{id:req.body.id}})
//     res.json({result:true})
// }

const deleteFunc = async (req,res) =>{
    const [id] = req.body
    await User.destroy({where:{id}});
    res.json({result:true});
};

// const userall = async (req,res) =>{
//     const result = await User.findAll({
//         atrributes: [`id,userid,name`],
//     });
//     console.log(result);
//     res.json({result})
// }

module.exports = {signup,login,info,updateFunc,deleteFunc}