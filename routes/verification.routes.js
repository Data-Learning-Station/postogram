import { Router } from "express";
import authentification from "../middlewares/autentification.js";

const router = Router()

router.get('/verify', authentification, async (req, res) => {
  
  const { username, firstName, lastName, age, avatar } = res.locals.user

  res.json({
    message: 'Successfuly authentificated',
    user: {
      username,
      firstName,
      lastName,
      avatar,
      age
    }
  })
})

export default router