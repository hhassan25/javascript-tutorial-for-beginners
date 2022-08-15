/*console.log('hello from main.js')


//variables
let age = 25
console.log(age)


const salary = 80000
console.log(salary)
//const cannot be empty and cannot be changed
//salary = 1

let sum = 0
sum = 6
console.log(sum)*/

//Data types
/*const name = 'hadi'
const language = "javascript"
const course = `javasript course`

const total = 0
const PI = 3.14

const isPrimaryNumber = true
const isNewUser = false

let result
console.log(result)
//run console in the borwser or in the node terminal

const res = undefined
//undefined us used to declare a value that is not yet defined

const data = null
//null is used to declare that a value is null

const person = {
    'firstName':'Hadi',
    'lastName': 'Hassan',
    'age': 30
}

console.log(person.firstName)


const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[0])

let a = 10
a = 'Hadi'
a = true
console.log(a)*/

/*let x = 10
// = (equal) is the assignment operator

let y = 5
console.log(x + y)
console.log(x % y)
console.log(x++)
// +, -, *, /, % are the arithmetic operators


console.log(x == y)
console.log(x != y)
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
//these are comparison opertors that compare and return a boolean


const isValidNumber = x>8 && 8>y
const isValidNumberNew = x>8 || 8>y
console.log(isValidNumber)
console.log(isValidNumberNew)

const isValid = false
console.log(!isValid)
//and, or are logical operators


console.log('Hadi ' + 'Hassan')

const isEven = 10 % 2 == 0 ? true : false
console.log(isEven)*/


//here getting started with implicit conversion
/*console.log(2 + '3')
console.log(true + '3')
console.log('4' - '2')
console.log('hadi' - 'hassan')
console.log('5' - true)
console.log('5' - false)
console.log('5' - null)
console.log(5 + undefined)



console.log(Number('5'))
console.log(Number(false))
console.log(Number(''))
console.log(parseInt('5'))
console.log(parseFloat('5.44'))



console.log(String(500))
console.log(String(true))
console.log(String(null))
console.log(String(undefined))


console.log((500).toString())
console.log(Boolean(10))// null undefined '' Nan
//end of session 5
*/

/*const var1 = 10
const var2 = '10'
console.log(var1 == var2)
console.log(var1 === var2)
*/

//end of session 6

/*const num = -5

if(num > 0){
    console.log('number is positive')
}

else {
    console.log('number is negative')
}


const n = 9
if(n > 0){
    console.log('positive')
}
else if(n < 0){
    console.log('negative')
}
else{
    console.log('number is zero')
}


const color = 'black'

switch(color){
    case 'red':
         console.log('color is red')
    break

    case 'blue':
         console.log('color is blue')
    break

    case 'green':
        console.log('color is green')
    break

    default:
        console.log('not a valid color')
}
*/
//end of session 7


// for loop example
/*for(let i = 1; i <= 5; i++){
    console.log('iteration number ' + i)
}


//while loop example
let a = 1
while(a < 5){
    console.log('iteration a : ' + a)
    a++
}


//Do..While loop
let x = 1
do{
    console.log('iteration x : ' + x)
    x++
} while(x<5)


//for..of loop
const numArray = [1, 2, 3, 4, 5]
for(const num of numArray){
    console.log('Iteration number ' + num)
}*/

//end of session 8

function greet(){
    console.log('good morning dear')
}

greet()
//=====
greet()
greet()

function greet1(username){
    console.log('good morning dear ' + username)
}

greet1('hadi')



function add(a, b){
    return a + b
}
const sum = add(5,10)
console.log(sum)





const arrowSum = (a,b) =>  a + b

const sumA = arrowSum(24,43)
console.log(sumA)