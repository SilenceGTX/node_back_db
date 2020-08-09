var express = require('express');
var UserModel = require('../Models/UserModel');

//获取所有用户
exports.getAllUsers = (req, res) => {
    UserModel.getAllUsers()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

//获取某个分组的用户
exports.getGroupUsers = (req, res) => {
    UserModel.getGroupUsers(req.params.group)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

//添加一个新用户
exports.addUser = (req, res) => {
    UserModel.addUser(req.body.name, req.body.user_group)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};