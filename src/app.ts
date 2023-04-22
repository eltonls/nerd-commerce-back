import express from "express"
import cors from "cors"
import session from "express-session"
import ProductRoutes from "./routes/product.route"
import UserRoutes from "./routes/user.route"
const app = express()
const port = process.env.PORT || 3000

app.use(
  session({
    secret: "thisSecret",
    resave: false,
    saveUninitialized: false
  })
)

app.use(express.json())
app.use(cors())

app.use("/products", ProductRoutes)
app.use("/user", UserRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
