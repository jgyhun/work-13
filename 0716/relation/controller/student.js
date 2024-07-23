const { response } = require('express');
const {Student, Course, StudentCourse} = require('../models');
const studentCourse = require('../models/studentcourse');
const student = require('../models/student');

exports.createStudent = async (req,res) =>{
    try{
        const {name} = req.body
        const result = await Student.create({name});
        res.json({result: true, response: result});
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};
exports.createCourse = async (req,res) =>{
    try{
        const {title} = req.body;
        const result = await Course.create({title});
        res.json({result:true ,response:result});
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};

exports.createSC = async (req,res) =>{
    try{
        const {studentId, courseId} = req.body
        const result = await StudentCourse.create({studentId, courseId});
        res.json({result: true, response: result})

    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};
//학생이 어느 코스에 등록되어있는지 가져오기
exports.getStudent = async (req,res)=>{
    try{
        const {id} = req.params
        const result = await Student.findByPk(id,{
            include:[{model:Course}]
        });
        res.json({result: true,response: result})

    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};

//코스에 어떤 학생들이 등록 되어있는지 가져오기
exports.getCourse = async (req,res)=>{
    try{
        const {id} = req.params
        const result = await Course.findByPk(id,{
            attributes: ['title'],
            include:[{ model: Student, attributes:['name'], through:{}}]
        });
        res.json({result: true,response: result});

    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
};

exports.deleteStudent = async(req,res) =>{
    try {
        const {id} = req.body
        await StudentCourse.destory({where:{studentId: id}});
        await Student.destory({where:{id}});
        res.json({result:true})
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
}

exports.deleteCourse = async(req,res) =>{
    try {
        const {id} = req.body
        await StudentCourse.destory({where:{studentId: id}});
        await Course.destory({where:{id}});
        res.json({result:true})
    }catch(error){
        console.log(error);
        res.status(500)({result: false, message:'서버오류'});
    }
}