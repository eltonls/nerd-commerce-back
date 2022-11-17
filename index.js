import express from "express";
const app = express();

app.get("/", (_, res) => {
  res.send("Hello world!");
});

app.listen("8080", () => {
  console.log("Listenning on port 8080");
});

export default app;
