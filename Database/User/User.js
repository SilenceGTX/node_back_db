const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Sequelize.Model {}

    User.init({
        id: {
            type: DataTypes.INTEGER, //数据类型为整型
            autoIncrement: true, //自增
            allowNull: false, //不允许空值
            primaryKey: true //主键
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_group: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { sequelize, modelName:'users', timestamps: true});

    return User;
}