const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();

const port=8000;

app.get('/api/user',(req,res)=>{
    return res.json(data);
});
app.get('/user:id',(req,res)=>{
    const id = Number(req.params.id);
    const users = data.find((users)=> users.id===id)
    return res.json(users);

});

app.post('/admin',(req,res)=>{
    return res.json({status:"done"});
})

app.patch('/home',(req,res)=>{
    return res.json({status:"done update"});
})

app.delete('/about',(req,res)=>{
    return res.json({status:"done delete"});
})
app.listen(port,()=>{
    console.log(`successfully code run in port ${port}`);
});
// this is only for practice i am testing with postman
