import multer from "multer"
import { nanoid } from 'nanoid'

const storage = multer.diskStorage({

  filename: (req, file, cb) => {
    cb(null, nanoid() + '.png')
  },

  destination: (req, file, cb) => {
    cb(null, 'storage')
  }
})

export default multer({ storage })