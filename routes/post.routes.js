import { Router } from "express";
import { findPostByAuthor, createPost, deletePost, userHasPost } from "../services/post.service.js";
import authentification from "../middlewares/autentification.js";
import multerUpload from "../middlewares/multer-upload.js";

const router = Router()

router.get('/posts/:username', authentification, async (req, res) => {
  try {
    let posts = await findPostByAuthor(req.params.username)
    res.json({
      message: `User @${req.params.username} posts`,
      posts
    })
  }
  catch(err) {
    res.status(500).json({
      message: err
    })
  }
})

router.post('/posts', authentification, multerUpload.single('media'), async (req, res) => {
  try {
    const { title, description, mediaType } = req.body
    const media = req.file.filename
    const authorId = res.locals.user.id
    
    const newPost = await createPost(authorId, title, description, media, mediaType)

    res.json({
      message: 'Post created.',
      post: newPost
    })
  }
  catch(err) {
    res.status(500).json({
      message: err
    })
  }
})

router.delete('/posts/:id', authentification, async (req, res) => {
  try {
    
    const postId = req.params.id
    const userId = res.locals.user.id

    if (await userHasPost(userId, postId)) {
      const post = await deletePost(postId)

      res.json({
        message: 'Post deleted.',
        post
      })
    }
    else {
      res.status(400).json({
        message: 'You cannot delete this post =)',
      })
    }
  }
  catch(err) {
    res.status(500).json({
      message: err
    })
  }
})

export default router