var express = require('express');
const UserRouter = require('./Routes/User');

var app = express();
app.use(express.urlencoded({extended: true})); //解析json用
app.use(express.json()); //解析json用

app.use('/', UserRouter)

app.listen(5000, function() {
    console.log('App listening on port 5000...')
});