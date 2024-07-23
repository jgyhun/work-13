const {DataTypes} = require('sequelize');

const member = (seq) =>{
    return seq.define('member',{
        userid: {
            type: DataTypes.STRING(31),
            allowNull: false,
            unique: true,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = member;