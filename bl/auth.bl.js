import { findUser, createUser } from '../services/user.service.js'
import md5 from 'md5'

async function login(username, password) {

    const existsUser = await findUser(username)
    if (!existsUser) {
        return {
            status: 400,
            message: `User with username ${username} not found.`
        }
    }
    else if (existsUser.password !== password) {
        return {
            status: 400,
            message: 'Wrong username or password.'
        }
    }
    else {
        return {
            status: 201,
            message: 'Successful logged in.',
            user: {
                username: existsUser.username,
                token: existsUser.token
            }
        }
    }    
}

async function register(username, password, firstName, lastName, age, avatar) {

    const existUser = await findUser(username)

    if (existUser) {
        return {
            status: 400, 
            message: `User with username ${username} already exists.`
        }
    }
    else {
        const token = md5(username + ':' + password)
        await createUser(username, password, firstName, lastName, +age, avatar, token)

        return {
            status: 200,
            message: 'User created.',
            user: {
                username,
                token
            }
        }
    }
}

export default {
    login,
    register
}