const express=require('express');
const app=express();
const port=3002;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{title:'Webpage',message:'I am Tejaswini.I am from Andhra Pradesh.'});
});
app.get('/aboutus',(req,res)=>{
    res.render('about');
});
app.listen(port);