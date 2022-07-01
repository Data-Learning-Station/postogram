import { prisma } from "../config/database"

export function createUser(username, password) {
    return prisma.user.create({
        data: {
            username,
            password
        }
    })
}

export function findUser(username) {
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}