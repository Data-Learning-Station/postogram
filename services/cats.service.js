const cats = [
    {name: "Baroqvoy", age: 86}
]

export function addCat(name, age) {
    cats.push({ name, age })
} 

export function allCats() {
    return cats
}