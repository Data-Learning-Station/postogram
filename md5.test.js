// import md5 from "md5";

// const username = 'abbos'
// const password = 'qwerty'

// console.log(md5(`${username}:${password}`));


const token = "Basic ajdka918392183mzxncaksdsa"

console.log(token); // Basic ajdka918392183mzxncaksdsa
const parts = token.split(' '); // ['Basic', 'ajdka918392183mzxncaksdsa']

console.log(parts[1]);