import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './configs/connectDB'

require('dotenv').config();
let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port)
})