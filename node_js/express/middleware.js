const express = require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("first middlewire");
    next();
})
app.use((req,res,next)=>{
    console.log("second middlewire");
    next();
})
app.get('/',(req,res)=>{
    res.send("this is server first request");
})

app.get('/profile',(req,res)=>{
    res.send("this is profile window");
})
app.listen(3000,()=>{
    console.log("port is 3000");
})