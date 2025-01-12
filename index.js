const express = require("express");
const app = express();
const path =require("path");

const port = 8080;
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.set("view engin","ejs");



app.get("/",(req,res)=>{
    res.render("index.ejs");
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});




