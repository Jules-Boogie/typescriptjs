# typescriptjs
save notes and code for typescript


Documentation : https://www.typescriptlang.org/docs/home.html

installations:  
npm install -g typescript // globally install typescript using node package manager
npm init // to instantiate a packagejson file
npm i --save-dev lite-server // install lite-server for dev purposes to prevent having to reload the browser ... 
Lite-server is added into the scripts object in  the packagejson file as a value to the start key. 
Lite Server serves up the html folder on localhost3000
tsc app.ts to run the typescript compiler 


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


Core Syntax and Features:

Core Types:
typescript uses static types - set during development and checked during compilation
javascript uses dynamic types - resolved at runtime
add type parameters to a variable or argument in a function

number:  1,1.53, -10
string: "Hi", 'Hi", `Hi`
boolean: true, false
object = {key:value}
let array: string[] or any[]
tuples: [number,string] fixed length and fixed type array
Enums: enum Role {NEW = 5, OLD, AUTHOR} OLD = 6, AUTHOR = 7
any: any; any[]
union: input: number | string | boolean
create custom type with type keyword // use descriptive type alias 
type combinable = number | string
function return types: number, string, or void if the function does not return anything
function type eg 
let values: Function;
let values:(a:number, b:number)=> number
unknown type: it is better than any because typescript compiler still checks 
never type: 


TypeScript Compilations
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
https://www.typescriptlang.org/docs/handbook/compiler-options.html
1) use watchmode so that you do not have to run tsc app.js everytime you make a change 
2) use tsc --init to watch multiple files in the project and run tsc alone so that typescript will compile all ts files- it creates a tsconfig.json file
3) tsc init creates a new .json file that manages compilation - you can add an exclude key in this file that points to all the files you dont want to compile when you run tsc in the terminal
4) we can also have an include key to specify folders you want to include when compiling the project






