var express=require('express');
var routes=require('./routes/router');
var mongoose=require('mongoose');
var cors=require('cors');
var bodyParser=require('body-parser')

var app=express();

mongoose.connect('mongodb://192.168.129.90:27017/user-management',{ useNewUrlParser: true,useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
    console.log('connected to db');
});

mongoose.connection.on('error',()=>{
    console.log('error occured');
})

app.use(cors());
app.use(bodyParser.json());

app.use('/',routes)

app.listen(3000,()=>{
    console.log('connected to 3000');
})

module.exports= app;