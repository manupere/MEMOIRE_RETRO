const express = require( "express");
const pg = require( "pg");
const dotenv =require("dotenv");

// création serveur
const app = express();
app.set("engine view","ejs");
app.set("views","./views") 

//route
app.get("/",(req,res)=>{
res.send("HELLO WORLD");
});
//ecoute serveur
app.listen(3000,()=>{
    console.log('Serveur demarré sur port 3000');
});