import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { engine } from 'express-handlebars'

import verificationRoutes from './routes/verification.routes.js'
import uploadRoutes from './routes/upload.routes.js'
import postRoutes from './routes/post.routes.js'

import authApiRoutes from './routes/api/auth.api.routes.js'
import authViewRoutes from './routes/view/auth.routes.js'

import profileViewRoutes from './routes/view/profile.routes.js'

dotenv.config()

const app = express()

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use('/', express.static('public'))
app.use('/download', express.static('storage'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authApiRoutes)
app.use(authViewRoutes)

app.use(profileViewRoutes)

app.use(verificationRoutes)
app.use(uploadRoutes)
app.use(postRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Sarvar is running on http://localhost:' + port);
})