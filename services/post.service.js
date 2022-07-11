import { prisma } from '../config/database.js'

export function createPost(authorId, title, description, media, mediaType) {
  return prisma.post.create({
    data: {
      title,
      description,
      media,
      mediaType,
      author: {
        connect: {
          id: authorId
        }
      }
    }
  })
}

export async function userHasPost(userId, postId) {
  const post = await prisma.post.findFirst({
    where: {
      id: postId,
      authorId: userId
    }
  })
  return post !== null
}

export function findPostByAuthor(username) {
  return prisma.post.findMany({
    where: {
      author: {
        username
      }
    }
  })
}

export function deletePost(id) {
  return prisma.post.delete({
    where: {
      id
    }
  })
}