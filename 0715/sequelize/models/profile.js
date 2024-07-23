const { type } = require('os');
const {DataTypes} = require('sequelize');

const profile = (seq) =>{
    return seq.define('profile',{
        username:{
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            validate:{
                min: 0,
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },  
    });
};

module.exports = profile;