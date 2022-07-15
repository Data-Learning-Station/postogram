import { addCat, allCats } from '../services/cats.service.js'

function retriveCats() {
    const cats = allCats()
    return cats
}

function createCat(name, age) {
    addCat(name, age)
}

export default {
    retriveCats,
    createCat
}