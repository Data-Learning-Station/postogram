import { findUserByToken } from "../services/user.service.js"

const authentificationMiddleware = async (req, res, next) => {

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

  res.locals.user = user

  next()
}

export default authentificationMiddleware