const express = require('express');
const app=express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// this is use for ejs file when we create route so with help of we are show in our frontend which route what we shown
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')))

// this is making routes in this we use render because we make ejs file and in render we write file name those we making in views folder 
app.get('/',(req,res)=>{
    res.render("index");
})


app.listen(3000,()=>{
    console.log("port is 3000");
})