import "reflect-metadata";
import express from "express";
import "./database"
import { router } from "./routes";
import "./shared/container"

const app = express();

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.json());
app.use(router);


app.listen(3000, () => {
    console.log("Server is running");
})
