var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

//conexão local
var mongoDB_URL = 'mongodb://127.0.0.1:27017/disciplinas';
mongoose.connect(mongoDB_URL,{useNewUrlParser:true});

var db = mongoose.connection;

db.on('connected',()=>{
    console.log('Mongoose connected to '+ mongoDB_URL);
});

db.on('disconnected',()=>{
    console.log('Mongoose disconnected to '+ mongoDB_URL);
});

db.on('error',(err)=>{
    console.log('Mongoose error '+ err);
});