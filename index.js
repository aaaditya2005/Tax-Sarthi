const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const path =require("path");
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const port = 8080;
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.set("view engin","ejs");
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})

app.post("/signup", async (req, res) => {
    let { name, email, dob, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
        return res.redirect("/signup");
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let Createduser = await userModel.create({
                name,
                dob: dob.split('/').reverse().join('-'),
                email,
                password: hash,
            });

            const token = jwt.sign({ email: Createduser.email, userid: Createduser.id }, process.env.JWT_SECRET_KEY, {
                expiresIn: '5h'
            });

            res.cookie('token', token, { httpOnly: true });
            res.redirect("/login");
        });
    });
});


app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.post("/login", async (req, res) => {
    let { email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (!user) return res.send("Something went wrong!");

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email, userid: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            res.cookie("token", token, { httpOnly: true });
            res.render("home.ejs");
        } else {
            res.send("Something went wrong!");
        }
    });
});

app.get("/home",(req,res)=>{
    res.render("home.ejs");
})

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})

app.get("/tool",isloggedin,async(req,res)=>{
    
    let user = await userModel.findOne({email:req.user.email});
    res.render("tool.ejs",{user,calculateAge})
})

app.post("/tool",(req,res)=>{
    
})

function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

function isloggedin(req, res, next) {   
    if (!req.cookies.token) {
        return res.redirect("/login");
    }
    else{
        const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
        req.user = data; 
        next(); 
    }
}


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});




