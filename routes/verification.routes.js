import { Router } from "express";
import { findUserByToken } from "../services/user.service.js";

const router = Router()

router.get('/verify', async (req, res) => {

  if (!req.header('Authorization')) {
    return res.status(401).json({
        message: 'Token not provided.'
    })
  }

  const token = req.header('Authorization').split(' ')[1]

  const user = await findUserByToken(token)

  if (user === null) {
    return res.status(401).json({ // 200
      message: 'Invalid token'
    })
  }
  
  res.json({
    message: 'Successfuly authentificated',
    user: {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age
    }
  })
})

export default router