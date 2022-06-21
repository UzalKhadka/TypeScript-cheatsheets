// Cheat Sheet for TypeScript

/////////////////////// 1. Basics: Installation and Running ///////////////////////

// install typescript globally
// npm install -g typescript

// check version of typescript
// tsc --version

// compile ts file to js
// tsc index.ts

// auto-compile all ts files in the root directory
// tsc

// auto-compile all ts files in the root directory and watch for changes
// tsc -w

// watch the file
// tsc --watch index.ts

// set up the config file
// tsc --init

// creating react app with typescript
// npx create-react-app my-app --template typescript

// installing typescript in an existing react app project
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// OR
// yarn add typescript @types/node @types/react @types/react-dom @types/jest
// AND then restart the app

// Config file - used to set up the typescript compiler settings for the project
// "strict" : true, // enables strict typing mode
// "target": "es6", // sets the target version of the output JavaScript code to ES6
// "module": "commonjs", // sets the target module format to CommonJS
// rootDir: "./src", // sets the root directory for the project
// outDir: "./dist", // sets the output directory for the compiled js files for the project

// code inside src or any directory that is set as the root directory in the config file
// use the files in the dist directory or any directory that is set as the output directory in the config file as outputs


/////////////////////// 2. Variables ///////////////////////

// basic types
let id: number = 5 // set the variable as a number
let first_name: string = "John" // set the variable as a string
let isMarried: boolean = false // set the variable as a boolean
let age: number = 30 // set the variable as a number
let hobbies: string[] = ["Sports", "Cooking"] // set the variable as an array of strings
let address: [string, number] = ["Street", 123] // set the variable as an array of strings and numbers

// get variable data type
// console.log(typeof id) // number
// console.log(typeof first_name) // string
// console.log(typeof isMarried) // boolean
// console.log(typeof hobbies) // string[]
// console.log(typeof address) // object


let anyType: any = "Hello" // set the variable as a string
anyType = 5 // set the variable as a number

let numId: number = 99
numId = 10 // set the variable as a number
// id = '1' // gives off error

// type inference
let new_id = 10 // by default sets the type to number
// new_id = '10' // gives off error

// while compiling, the compiler will infer the type of the variable


// tuples - used to return multiple values from a function
let person: [string, number, boolean] = ["John", 30, true] // set the variable as an array of strings and numbers
// person = ["John", 30, 22] // gives off error

let employee: [number, string][]
employee = [
  [1, "John"],
  [2, "Jane"]
]

// unions - can be one of the types
let _id: number | string = 10 // set the variable as a number or a string
_id = "10" // set the variable as a string

// enums - enum is a way to define a set of named constants
enum Color {
  Red,
  Green,
  Blue
}

// console.log(Color.Red) // 0
// console.log(Color.Green) // 1 -> Auto-increment by 1
// console.log(Color.Blue) // 2 -> Auto-increment by 1

enum Color2 {
  Red = 5,
  Green,
  Blue
}

// console.log(Color2.Red) // 5
// console.log(Color2.Green) // 6 -> Auto-increment by 1
// console.log(Color2.Blue) // 7 -> Auto-increment by 1

enum Color3 {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

// console.log(Color3.Red) // red
// console.log(Color3.Green) // green
// console.log(Color3.Blue) // blue

// Objects - used to store data in a structured way
type userData= { id: number, name: string, age: number } // set the variable as an object

const user: userData = {
  id: 1,
  name: "John",
  age: 30
}

// Type Assertions - used to check the type of a variable
let cid: any = "This is a string"
let customerID = <number> cid // set the variable as a number
let customerId = cid as number // set the variable as a number

// Functions - used to define a function
function add(a: number, b: number): number {
  return a + b
}

// console.log(add(5, 6)) // 11

// void - function that doesn't return anything
function sendMessage(message: string | number): void {
  console.log(message)
}

// sendMessage("Hello") // Hello
// sendMessage(10) // 10

// Interface - interface is a way to define the structure of the object
interface userInterface {
  id: number,
  name: string,
  age?: number, // ? means that the property is optional
}

const user1: userInterface = {
  id: 1,
  name: "John"
}

// console.log(user1) // {id: 1, name: "John"}

const user2: userInterface = {
  id: 2,
  name: "Jane",
  age: 30
}

// console.log(user2) // {id: 2, name: "Jane", age: 30}


// types can be used with primitives and unions
type Point = number | string
const point: Point = 10

// console.log(point) // 10

// we cannot do it using interfaces
// interface PointInterface = number | string

// read only properties
interface UserInterface {
  readonly id: number
  name: string
}

let user11: UserInterface = {
  id: 1,
  name: "John"
}

// user11.id = 2 // gives off error


/////////////////////// 3. Functions ///////////////////////

// Simple function
function sampleAddFunction(a: number, b: number): number {
  return a + b
}

// console.log(sampleAddFunction(5, 6)) // 11


// Interfaces with functions
interface mathFunction {
  (a: number, b: number): number
}

const addFunction: mathFunction = (a, b) => a + b
const subtractFunction: mathFunction = (a, b) => a - b

// console.log(addFunction(5, 6)) // 11


/////////////////////// 4. Classes and Objects ///////////////////////

interface PersonInterface{
  id: number
  name: string
  age?: number
  getId(): number // returns number
}

// Classes
// class Person implements PersonInterface {
class Person {
  private id: number // only accessible within the class
  name: string
  protected age?: number // only accessible within the class and its children

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  public getId(): number {
    return this.id
  }
}

const person1 = new Person(1, "John")

// console.log(person1) // Person {id: 1, name: "John"}
// console.log(person1.id) // not accessible since private
// console.log(person1.getId()) // 1


// Inheritance & Subclasses
class Employee extends Person {
  constructor(id: number, name: string, age?: number) {
    super(id, name)
    this.age = age
  }

  public getName(): string {
    return this.name
  }
}

const employee1 = new Employee(2, "Jane", 30)

// console.log(employee1.getName()) // 2


/////////////////////// 5. Generics ///////////////////////

// Generics - Used to build reusable components
function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

// array of numbers & strings respectively
let numArray= getArray([1,2,3,4])
let strArray= getArray(['Ben', 'John', 'Jane'])

numArray.push('Jill') // works since it is an array of type any
strArray.push(5) // works since it is an array of type any

// but using generics
function getArrayGeneric<T>(items: T[]): T[] {
  return new Array().concat(items)
}

// generic array of numbers & strings respectively
let numArrayGeneric= getArrayGeneric<number>([1,2,3,4])
let strArrayGeneric= getArrayGeneric<string>(['Ben', 'John', 'Jane'])

// numArrayGeneric.push('Jill') // does not work since the array is of type number
// strArrayGeneric.push(5) // does not work since the array is of type string
