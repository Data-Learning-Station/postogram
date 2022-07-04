import { prisma } from "../config/database"

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

export function findUser(username) {
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}
