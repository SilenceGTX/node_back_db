const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './database.sqlite'
}); //设置数据库

var db = {};

var model = require('./User/User.js')(sequelize, Sequelize.DataTypes)
db[model.name] = model; //将表装入数据库

//插入预置数据
sequelize.sync({force:true})
.then(() => {
    require('../Prepopulate/InsertTables/InsertUser')(db)
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;