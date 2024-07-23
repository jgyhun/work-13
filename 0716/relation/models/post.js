const {DataTypes} =require('sequelize');
const { sequelize } = require('.');

const post = (seq) =>{
    return seq.define('post',{
        title:{
            type: DataTypes.STRING(33),
            allowNull:false,
        },
        content:{
            type: DataTypes.TEXT('medium')
        }
    })
};

module.exports= post;