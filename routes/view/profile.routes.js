import { Router } from "express";

const router = Router()

router.get('/profile', (req, res) => {
    res.render('profile', { username: '<span style="color: blue;">blue</span>' } )
})

export default router