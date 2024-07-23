const {DataTypes} = require('sequelize');

const comment = (seq)=>{
    return seq.define('comment',{
        Comment: DataTypes.STRING,
        postId:{
            type: DataTypes.INTEGER,
            References:{
                model:'posts',
                key:'id',
            },
            onDelete:'CASCADE',
        },
    });
};

module.exports = comment;