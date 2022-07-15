import { Router } from "express";
import catsBl from '../../bl/cats.bl.js'

const router = Router()

router.get('/api/cats', (req ,res) => {
    const cats = catsBl.retriveCats()
    res.json(cats)
})

router.post('/api/cats', (req, res) => {
    const { name, age } = req.body
    catsBl.createCat(name, age)
    res.sendStatus(200)
})

export default router