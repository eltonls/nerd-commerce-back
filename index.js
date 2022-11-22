import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

const corsConfig = {
  origin: "http://localhost:3000"
}

app.use(cors(corsConfig));
app.use(bodyParser.json());

const PORT = process.env.PORT | 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
