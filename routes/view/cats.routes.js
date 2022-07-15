import { Router } from "express";
import catsBl from '../../bl/cats.bl.js'

const router = Router()

router.get('/cats', (req ,res) => {
    const cats = catsBl.retriveCats()
    res.send(`
        <h1>Cats</h1>
        ${cats}
    `)
})

router.post('/cats', (req, res) => {
    const { name, age } = req.body
    
    catsBl.createCat(name, age)

    res.send(`
        <h1>Cat created</h1>
    `)
})

export default router