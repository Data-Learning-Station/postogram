import { MediaType } from "@prisma/client"
import multer from "multer"
import { nanoid } from 'nanoid'

const storage = multer.diskStorage({

  filename: (req, file, cb) => {
    const { mediaType } = req.body
    
    if (mediaType === MediaType.PHOTO) {
      cb(null, nanoid() + '.png')
    }
    else if (mediaType === MediaType.VIDEO) {
      cb(null, nanoid() + '.mp4')
    }
    else {
      cb(null, nanoid() + '.png')
    }
  },

  destination: (req, file, cb) => {
    
    const { mediaType } = req.body

    if (mediaType === MediaType.PHOTO) {
      cb(null, 'storage/photos')
    }
    else if (mediaType === MediaType.VIDEO) {
      cb(null, 'storage/videos')
    }
    else {
      cb(null, 'storage/avatars')
    }
  }
})

export default multer({ storage })