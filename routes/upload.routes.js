import { Router } from "express";

import multerUpload from "../middlewares/multer-upload.js";

const router = Router()

router.post('/upload', multerUpload.single('avatar'), (req, res) => {
    console.log('File uploaded:' + req.file.filename);
    res.send(req.file.filename)
})

router.get('/download/:filename', (req, res) => {
  res.sendFile(req.params.filename, { root: './storage' })
})

export default router;