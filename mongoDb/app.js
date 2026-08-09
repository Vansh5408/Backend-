const express = require('express');
const app = express();
const userModel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey");
})

app.get('/create', async (req, res) => {
    const userCreate = await userModel.create({
        name: "harsh",
        username: "harsh1",
        email: "harsh@123gmail.com"
    });

    res.send(userCreate);
});


app.get('/update',async (req,res)=>{
    const userUpdate=await (userModel.findOneAndUpdate({username:"harsh1"},{name:"elon musk"},{new:true}));
    res.send(userUpdate);
})




app.listen(3000);