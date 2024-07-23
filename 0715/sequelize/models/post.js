const {DataTypes} = require('sequelize')

const post = (set) => {
    return set.define('post',{
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        content: DataTypes.TEXT('medium'),
    });
}

module.exports = post;