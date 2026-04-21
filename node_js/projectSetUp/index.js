const express = require('express');
const app=express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// this is use for ejs file when we create route so with help of we are show in our frontend which route what we shown
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


// this line meaning of join the current directory with public folder and in public folder are css javascript etc folders
app.use(express.static(path.join(__dirname,'public')))



// this is making routes in this we use render because we make ejs file and in render we write file name those we making in views folder 
app.get('/',(req,res)=>{
    res.render("index");
})


// : colon means this is dynamic route this use we when we need multiple person data means when we login instagram by our id's so all persons
//  diff id so username is dynamic so we use : in routes
app.get('/author/:username',(req,res)=>{
    res.send(`welcome ,${req.params.username}`);
})

app.get('/author/:username/:age',(req,res)=>{
    res.send(`welcome ,${req.params.username} and your age is ${req.params.age}`);
})

app.listen(3000,()=>{
    console.log("port is 3000");
})