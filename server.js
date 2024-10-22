// const express = require("express")
// const route = require("./Router/Router")

import express from "express";
import { router } from './Router/Router.js';
import sequelize from "./db/dbconnect.js";
import user from "./Model/UserModel.js";

const app = express();

app.use(express.json());

const port = process.env.NODE_ENV === 'production' ? 8080 : 7070;

app.use('/', router);


sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})
.catch((err)=>{

    console.log("Mysql connection failed :",err)
})


