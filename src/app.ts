import express from "express"
import ProductRoutes from "./routes/product.route"
const app = express()
const port = 3000

app.use(express.json())

app.use("/products", ProductRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
