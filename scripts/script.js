/*
TOPIC: Operators and Expressions

Operators:
    - Arithmetic: +, -, *, /, %
    - Comparison: ==, ===, <, >, !=
    - Logical: &&, ||, !
    - Nullish Coalescing Operator  ??
    - Unary Operators (+x, -x, x++, x--, !x)
    - String Operators (Concatination: "Hello " + "World!")
	


Expressions: 
    - In JavaScript, an expression is a valid unit of code that produces a value. An expression can be as simple as a constant value or a more complex combination of operators and operands.
	
    Example: 5 + 3, "Hello" + "World", 5 < 3 || 3 < 4
*/

/* Arithmetic Operators */
// addition 
const sum = 7 + 14;
// sum = 56;
console.log("sum : ", sum);

// substraction 
const substraction = 21 - 14;
console.log("substraction : ", substraction);

// multiplication
const multiplication = 7 * 3;
console.log("multiplication : ", multiplication);

/* Comparison Operators */
const result = 10 < 5;
const result2 = 10 > 5;

console.log("result : ", result);
console.log("result : ", result2);
console.log("result3: ", 21 == "21");
console.log("result3: ", 21 === "21");  // also checking datatype

/* Logical Operators */
const result4 = 21 == "21" && 21 === 21;  // both should be true
const result5 = 21 == "YES" || 21 === 21; // any of the should be true to make OR operator `true`
const result6 = !result5;

console.log("Logical AND operator result : ", result4);

console.log("Logical OR operator result : ", result5);

console.log("Logical NOT operator result : ", result6);


/* Nullish Coalescing Operator */
const firstName = null;

const fullName = firstName ?? "John Doe"; // ??
console.log("Full Name: ", fullName);

/* Unary Operators */
let x = 10;
let increment = ++x;

console.log("++x : ", increment);  // x = x+1;

let y = 10;
let decrement = --y;

console.log("--y : ", decrement);  // x = x-1;

let z = 5;
let incrementPostfix = z++;

console.log("z: ", z);
console.log("incrementPostfix: ", incrementPostfix);


/* GIT EXAMPLES */
/*
    echo "# js-turorials" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/nijaskhan/js-turorials.git
    git push -u origin main

    // when conflict comes for fast-forward
    git pull origin <branchname> --allow-unrelated-histories
*/