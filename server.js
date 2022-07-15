import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { engine } from 'express-handlebars'

import authRoutes from './routes/auth.routes.js'
import verificationRoutes from './routes/verification.routes.js'
import uploadRoutes from './routes/upload.routes.js'
import postRoutes from './routes/post.routes.js'

import catsApiRoutes from './routes/api/cats.api.routes.js'
import catsViewRoutes from './routes/view/cats.routes.js'

dotenv.config()

const app = express()

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authRoutes)
app.use(verificationRoutes)
app.use(uploadRoutes)
app.use(postRoutes)

app.use(catsViewRoutes)
app.use(catsApiRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Sarvar is running on http://localhost:' + port);
})