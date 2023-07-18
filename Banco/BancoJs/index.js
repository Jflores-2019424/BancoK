"use strict"

const express = require("express");
const app = express();
const { connection } = require("./src/database/connection");
require("dotenv").config();
const port = process.env.PORT;
const routes = require ("./src/routes/user.routes");
const cors = require("cors");
const { adminApp } = require("./src/controllers/user.controller");

adminApp();
connection();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())
app.use("/api", routes);

app.listen(port, function(){
    console.log(`El servidor esta corriendo en el puerto: ${port}`);
})

app.get("/", (req, res) =>{
    const htmlResponse =`
    <html>
        <body>
            <h1>Deploy</h1>
        </body>
    </html>
    `;
    res.send(htmlResponse);
})