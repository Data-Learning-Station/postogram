import { prisma } from "../config/database";

export function addComment(message, postId, authorId) {
  return prisma.comment.create({
    data: {
      message,
      author: {
        connect: { id: authorId }
      },
      post: {
        connect: { id: postId }
      }
    }
  })
}

export function findCommentsByPost(postId) {
  return prisma.comment.findMany({
    where: {
      postId
    }
  })
}

export function findCommentsByAuthor(authorId) {
  return prisma.comment.findMany({
    where: {
      authorId
    }
  })
}