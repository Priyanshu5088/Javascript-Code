const user = {
    username: "priyanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        return console.log(this)
    }
}

user.welcomeMessage()
console.log(this)// value is empty in node enviroment but value in browser enviroment is global ie; window object

