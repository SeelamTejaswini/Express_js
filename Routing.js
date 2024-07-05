var express=require('express');
var app=express();
app.get('/yamuna', function(req, res){
    res.send('<h1>Hello yamuna</h1><P>Welcome to the Ymauna Page</P>');
});
app.post('/Divya', function(req, res){
    res.send('<h1>Hello Divya</h1><p>Welcome to Postman</p>');
});
app.get('/', function(req, res){
    res.send('<h1>this is Landing Page</h>')
})
app.listen(2004);