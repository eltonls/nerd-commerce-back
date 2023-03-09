import express from "express"
import cors from "cors"
import ProductRoutes from "./routes/product.route"
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use("/products", ProductRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
