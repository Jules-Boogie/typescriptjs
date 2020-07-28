# typescriptjs
save notes and code for typescript


Documentation : https://www.typescriptlang.org/docs/home.html

installations:  
npm install -g typescript // globally install typescript using node package manager
npm init // to instantiate a packagejson file
npm i --save-dev lite-server // install lite-server for dev purposes to prevent having to reload the browser ... 
Lite-server is added into the scripts object in  the packagejson file as a value to the start key. 
Lite Server serves up the html folder on localhost3000

Typescript Advantages

1) adds types 

javascript
function add(num1, num2) {
    return +num1 + +num2;
}

typescript
function add(num1:number, num2:number) {
  return +num1 + +num2;
}

2) adds features like interfaces or generics

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

3) 
