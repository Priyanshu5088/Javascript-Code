class Animal{
    constructor(name,legcount,speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal")
    }
    speak(){
        console.log("hi there " + this.speaks);
    }
}

console.log(Animal.myType()) // static calling class
let dog = new Animal("dog",4,"bow bow");
let cat = new Animal("cat", 4,"meow meow");

// console.log(cat.speaks);
cat.speak() // call function on object