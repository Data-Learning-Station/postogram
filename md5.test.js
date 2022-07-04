import md5 from "md5";

const username = 'abbos'
const password = 'qwerty'

console.log(md5(`${username}:${password}`));