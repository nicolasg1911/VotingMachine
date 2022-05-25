const express = require('express');

const cors =require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const electionServices = require('./services/electionServices');
electionServices.createServices(app);


app.listen(8080, ()=>{
    console.log("El servidor esta preparado");
});