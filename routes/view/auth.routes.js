import { Router } from "express";
import authBl from "../../bl/auth.bl.js";

const router = Router()

router.get('/login', async (req, res) => {
    res.render('login')
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const data = await authBl.login(username, password)
    
    if (data.status == 201) {
        res.redirect('/profile')
    }
    else {
        res.send('Error: ' + data.message)
    }
})

export default router