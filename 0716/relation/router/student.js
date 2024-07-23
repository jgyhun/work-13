const express =require('express');
const { createStudent, createCourse, createSC,getStudent, getCourse, deleteStudent, deleteCourse } = require('../controller/student');
const router = express.Router();

router.post('/sutdent',createStudent);
router.post('/course', createCourse);
router.post('creatSC',createSC);
router.get('/getstudent/:id',getStudent);
router.get('/getCourse/:id',getCourse);
router.delete('/deletestudent',deleteStudent);
router.delete('/deletecourse',deleteCourse);
module.exports = router;