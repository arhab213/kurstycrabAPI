import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import bodyparser from "body-parser";
let PORT = 3000;
const app = express();
http.createServer(app);
app.use(bodyparser.json());
app.use(cors({ origine: "*" }));
mongoose.connect("mongodb://127.0.0.1:27017/krusty-krab").then(() => {
  console.log("database connected");
});

app.listen(PORT, () => {
  console.log(`connecte in port ${PORT}`);
});
