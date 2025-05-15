const express = require( "express");
const pg = require( "pg");
 require("dotenv").config();

// création serveur
const app = express();
app.set("engine view","ejs");
app.set("views","./views") 

const PORT = process.env.PORT;

//route
app.get("/",(req,res)=>{
res.send("HELLO WORLD");
});
//ecoute serveur

app.listen(PORT,()=>{
    // console.log('Serveur demarré sur port 3000',PORT);
    console.log(`Serveur démarré sur le port ${PORT}`);
    
});