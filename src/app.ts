import express from "express"
const app = express()
const port = 3000

app.get("/", (_, res) => {
  res.send("Parece que funciona")
})

console.log("Changes")

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})