import { PrismaClient } from "@prisma/client"
import Express, { Request, Response } from "express"

const router = Express.Router()

const prisma = new PrismaClient()

router.get("/", async (_, res: Response) => {
  const products = await prisma.product.findMany()
  res.json(products)
})

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id)
    }
  })

  res.json(product)
})

router.post("/", async (req: Request, res: Response) => {
  const { name, description, brand, imageUrl, price } = req.body

  const result = await prisma.product.create({
    data: {
      name: String(name),
      price: Number(price),
      description: String(description),
      brand: String(brand),
      imageUrl: String(imageUrl)
    }
  })

  res.json(result)
})

export default router
