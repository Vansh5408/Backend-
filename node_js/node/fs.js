const fs= require("fs");
fs.writeFile("hey.txt","I become a Businessman",(err)=>{
    if(err) console.error(err);
    else{
        console.log("done");
    }
})

fs.appendFile("hey.txt","befor the 2030",(err)=>{
    if(err) console.error(err);
    else {
        console.log("done");
    }
})

/*fs.rename("hey.txt","hello.txt",(err)=>{
    if(err) console.error(err);
    else{
        console.log("done");
    }
})

fs.copyFile("hello.txt","./copy.txt",(err)=>{
    if(err) console.log(err);
    else{
        console.log("done");
    }
})

fs.unlink("./hello.txt",(err)=>{
    if(err) console.error(err);
    else{
        console.log("done");
    }
})

fs.rmdir("./copy.txt",(err)=>{          // only delete the empty file 
      if(err) console.error(err);
    else{
        console.log("done");
    }
})

fs.rm("./copy.txt",{recursive:true},(err)=>{          //  delete the non-empty file or if folder use fs.rmdir
      if(err) console.error(err);
    else{
        console.log("done");
    }
})  */

fs.readFile("hey.txt",(err,data)=>{
     if(err) console.error(err);
    else{
        console.log(data.toJSON(String));
    }
})