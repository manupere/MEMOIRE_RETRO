const express = require( "express");
const pg = require( "pg");
 require("dotenv").config();

// création serveur
const app = express();
app.set("view engine","ejs");
app.set("views","./views") 

const PORT = process.env.PORT;

//route
app.get("/",(req,res)=>{
res.render("index");
});
//ecoute serveur

app.listen(PORT,()=>{
    // console.log('Serveur demarré sur port 3000',PORT);
    console.log(`Serveur démarré sur le port ${PORT}`);
    
});