import { prisma } from "../config/database.js"

export function createUser(username, password, firstName, lastName, age, token) {
    return prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            age,
            token
        }
    })
}

export function findUserByToken(token) {
    return prisma.user.findUnique({
        where: {
            token
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
