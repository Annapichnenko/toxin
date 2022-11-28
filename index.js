import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = `mongodb+srv://annapichnenko:GooGle2022@cluster0.ci46dta.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
