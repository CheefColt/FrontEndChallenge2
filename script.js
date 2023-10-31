import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 5500
const pwd = process.cwd()
console.log(pwd)

app.use(bodyParser.urlencoded({ extended: true }));

const listOfEmails = ["example@company.com"];

app.get("/", (req,res) =>{

    res.render("index.ejs");
});



app.post("/", (req,res) =>{

    const userMail = req.body.email;

    if (listOfEmails.includes(userMail)){
        res.render("successLogin.ejs", { userEmail : userMail});
    }
    else{
        res.render("index.ejs", {error: "Valid email required"});
    }

    
});

app.get("/views/styles/styles.css", (req,res) =>{
    res.sendFile(pwd+"/views/styles/styles.css");
});

app.get("/views/styles/success.css", (req,res) =>{
    res.sendFile(pwd+"/views/styles/success.css");
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})