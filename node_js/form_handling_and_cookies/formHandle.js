const express = require('express');
const app=express();

// parsing in web this is the main point of this  because when we send our details so those send the server in string form and more details like 
// IP address are send with details so server not understand these details so we used those

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// this is middleware making 
app.use((req,res,next)=>{
    console.log("first middlewire");
    next();
})
app.use((req,res,next)=>{
    console.log("second middlewire");
    next();
}) 

// this is making routes 
app.get('/',(req,res)=>{
    res.send("this is server first request");
})

app.get('/profile',(req,res)=>{
    res.send("this is profile window");
})

// error handling inn routes
app.use((err, req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
})
app.listen(3000,()=>{
    console.log("port is 3000");
})