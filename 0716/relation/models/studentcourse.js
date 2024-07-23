const {DataTypes} = require('sequelize');

const studentCourse =(seq) =>{
    return seq.define("studentCourse",{
        studentId: {
            type: DataTypes.INTEGER,
            reference:{
                model:'students',
                key:'id',
            },
            onDelete: 'CASCADE'
        },
        courseId: {
            type: DataTypes.INTEGER,
            reference:{
                model:'courses',
                key:'id',
            },
            onDelete: 'CASCADE'
        }
    })
}

module.exports = studentCourse