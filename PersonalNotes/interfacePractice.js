"use strict";
let user1;
user1 = {
    name: "max",
    age: 17,
    greet(phrase) {
        console.log("hi" + this.name);
    }
};
