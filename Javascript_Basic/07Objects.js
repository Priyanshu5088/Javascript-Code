const allUsers = [{
    firstName: "harkirat",
    gender: "male"
},{
    firstName: "priyanshu",
    gender: "male"
},{
    firstName: "xyz",
    gender: "female"
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}