import { PrismaClient } from "@prisma/client"
import Express from "express"

const router = Express.Router()

const prisma = new PrismaClient()

router.get("/", async (_, res) => {
  const products = await prisma.product.findMany()
  res.json(products)
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id)
    }
  })

  res.json(product)
})

router.post("/", async (req, res) => {
  const { name, description, brand } = req.body

  const result = await prisma.product.create({
    data: {
      name,
      description,
      brand
    }
  })

  res.json(result)
})

export default router
