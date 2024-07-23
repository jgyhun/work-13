const { response } = require('express');
const {Member,Profile} = require('../models');
const member = require('../models/member');
const profile = require('../models/profile');

//회원가입
exports.singup = async (req,res) =>{
    try{
    const{userid,password,username,age,email} = req.body;
    //존재여부확인
    const find = await Member.findOne({where:{userid}})
    console.log('find',find);
    if(find){
        res.json({result:false, message:'이미 존재하는 계정'});
    }else{
        const result = await Member.create({userid, password})
        console.log('singup',result);
        await Profile.create({username,age,email,memberId: result.id});
        res.json({result:true})
    }
  }catch(error){
    res.status(500).json({result:false, message:'서버오류'})
  }
};

exports.login = async (req,res)=>{
    try{
    const { userid,password } = req.body;
    const find = await User.findOne({where:{userid}})
    console.log('find',find);
    if(find){
        if(find.password === password){
            const response = {
                id:find.id,
                userid: find.userid,
                userid:find.userid,
            };
            res.json({ result: true, code: 100, response, message: '로그인 성공' });
        } else {
            res.json({ result: false, code: 1000, response: null, message: '비밀번호 틀렸습니다.' });
        }
    } else {
        res.json({ result: false, code: 1001, response: null, message: '회원이 아닙니다.' });
        
    }  
   }catch(error){
        res.status(500).json({result:false, message:'서버오류'})
      }
};
//회원조회
exports.find = async(req,res)=>{
    try{
    const{ id } = req.params;
    const result = await Member.findByPk(id,{
        attributes: ['userId'],
        //include: 쿼리를 실행 할때 괂련된 모델의 데이터도 함께 
        include:[{model:Profile, attributes: ['username','age','email']}]
    });
    console.log('find',result);
    res.json({result:true, response:result})
  }catch(error){
    res.status(500).json({result:false, message:'서버오류'})
  }
}

exports.update = async (req,res) =>{
    try{
        const {password,username,age,email} = req.body
        const find = await Member.findByPk(id)
        if(find){
            await Member.update({password},{where:{id}})
            await Profile.update({username,age,email},{where:{memberId: id}});
            res.json({result:true})
        }else{
            res.json({result:false, message:'회원이 없습니다'});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({result:false, message:'서버오류'})

    }
};

exports.delete = async (req,res) =>{
    try{
        const {id} =req.body;
        await Profile.destory({where:{memberId: id}});
        await Member.destory({where:{id}});
        res.json({result:true});
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
}

