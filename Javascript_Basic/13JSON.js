// Json Stringify
const user = {
    firstname : "priyanshu",
    gender : "male"
}

const finalstring = JSON.stringify(user)
console.log(finalstring)

// Json parse
const user2 = '{"name":"priyanshu","gender":"male","age":22}'

const finalobject = JSON.parse(user2)
console.log(finalobject["name"])