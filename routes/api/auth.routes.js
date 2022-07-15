import { Router } from "express";
import multerUpload from '../../middlewares/multer-upload.js'
import authBl from "../../bl/auth.bl.js";

const router = Router()

router.post('/register', multerUpload.single('avatar'), async (req, res) => {

    const { username, password, firstName, lastName, age } = req.body
    const avatar = req.file.filename

    const data = await authBl.register(username, password, firstName, lastName, age, avatar)

    res.status(data.status).json({
        message: data.message,
        user: data.user
    })
})


router.post('/login', async (req, res) => {

    const { username, password } = req.body

    const data = await authBl.login(username, password)

    res.status(data.status).json({
        message: data.message,
        user: data.user
    })
})

export default router
