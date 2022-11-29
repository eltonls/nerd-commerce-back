import db from "../models";
import bcrypt from "bcrypt";
const User = db.users;
const Op = db.Sequelize.Op;

// Registro de usuários
exports.create = async (req, res) => {
  const { firstName, lastName, email, password, cart } = req.body;

  // Validar Dados
  if (!firstName || !lastName || !email || !password) {
    res.status(400).send({
      message: "Credenciais inválidas"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
    cart: cart
  }

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err || "Ocorreu erro ao salvar no banco de dados"
      })
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({where: {email: email}})
    .then(async(userData) => {
      const passwordValidity = await bcrypt.compare(password, userData.password);

      if(passwordValidity) {
        res.send("Logged In");
        req.session.userId = userData.id;
        req.session.cart = userData.cart;
        req.session.wishlist = userData.wishlist;
      } else {
        res.status(500).send({
          message: "Password not valid"
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "User not found in DB"
      })
    })
}
