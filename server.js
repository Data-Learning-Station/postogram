import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import verificationRoutes from './routes/verification.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authRoutes)
app.use(verificationRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Sarvar is running on http://localhost:' + port);
})