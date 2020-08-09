var db = require('../Database/index');
var { Sequelize, Op } = require('sequelize');

//获取所有用户
async function getAllUsers() {
    var users = await db.users.findAll()
    return users
}

//获取某个分组的用户
async function getGroupUsers(group) {
    var users = await db.users.findAll({
        where:{
            user_group:group
        }
    })
    return users
}

//添加一个新用户
async function addUser(name, group) {
    var newUser = await db.users.create({
        name:name,
        user_group:group
    })
    return newUser
}

module.exports = {
    getAllUsers,
    getGroupUsers,
    addUser
}