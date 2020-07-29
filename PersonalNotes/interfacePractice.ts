// design an object with an interface using interface keyword
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface Person {
    name:string;
    age: number

    greet(phrase:string):void;
}

let user1: Person;

user1 = {
    name: "max",
    age: 17,
greet(phrase:string){
    console.log("hi" + this.name)
}
}


