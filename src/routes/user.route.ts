import { PrismaClient } from "@prisma/client"
import Express, { Request, Response } from "express"
import BCrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = Express.Router()

const prisma = new PrismaClient()

interface loginRequest {
  email: string
  password: string
}

router.post(
  "/login",
  async (req: Request<unknown, unknown, loginRequest>, res: Response) => {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const passwordMatch = await BCrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const token = jwt.sign({ userId: user.id }, "thisSecret", {
      expiresIn: "1h"
    })

    res.json({ token })
  }
)

router.post("/signup", async (req: Request, res: Response) => {
  const name: string = req.body.name
  const email: string = req.body.email
  const password: string = req.body.password

  const saltRounds = 10

  const hashedPassword = await BCrypt.hash(password, saltRounds)

  const result = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  res.json(result)
})

export default router
