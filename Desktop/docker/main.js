const express=require("express");

const app=express();

const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    return res.json({
        message:"Server is up and running!",
        success:true
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
