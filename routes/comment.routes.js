import { Router } from "express";
import authentification from '../middlewares/autentification.js'
import { addComment, findCommentsByAuthor, findCommentsByPost } from "../services/comments.service";

const router = Router()

router.post('/comments', authentification, async (req, res) => {

  const {message, postId } = req.body
  const authorId = res.locals.user.id

  try {
    const comment = await addComment(message, postId, authorId)  

    res.json({
      message: 'Comment added.',
      comment
    })
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ message: err })
  }
})

router.get('/comments/post/:id', authentification, async (req, res) => {
  try {
    const posts = await findCommentsByPost(+req.params.id)
    res.json({
      message: 'Post comments retrived.',
      posts
    })
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ message: err })
  }
})

router.get('/comments/author/:id', authentification, async (req, res) => {
  try {
    const posts = await findCommentsByAuthor(+req.params.id)
    res.json({
      message: 'Author comments retrived.',
      posts
    })
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ message: err })
  }
})


export default router