const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "post",
                key: "id"
            }
        },
        body: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // created_at: {
        //     type: DataTypes.DATE,
        //     defaultValue: Date.now(),
        //     get() {
        //         const timestamp = new Date(this.getDataValue("created_at")).toLocaleDateString()
        //         return timestamp
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;