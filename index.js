const express = require('express');
const app = express();
const authRouter = require("./routers/auth");
const categoryRouter = require("./routers/categories");
const postsRouter = require("./routers/posts");
const usersRouter = require("./routers/users");
const mongoose = require("mongoose");
require("dotenv").config();

//middleware
app.use(express.json())

// routers
app.use("/v1/auth",authRouter);
app.use("/v1/categories",categoryRouter);
app.use("/v1/posts",postsRouter);
app.use("/v1/users",usersRouter);


app.get("/",(req,res)=>{
    res.send("testing")
})


const start = async() =>{
    try{
        await mongoose.connect(process.env.REACT_APP_MONGO_URL)
        app.listen(5000);

    } catch(error){
        console.log(error);
    }
}

start();