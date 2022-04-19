/* eslint-disable no-else-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */

// Task 1--------------------------

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

// myFunction(1,2)
// Expected
// 3

// myFunction(1,10)
// Expected
// 11

// myFunction(99,1)
// Expected
// 100

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));

// Task 2--------------------------

// Write a function that takes a value as argument
// Return the type of the value

// myFunction(1)
// Expected
// 'number'

// myFunction(false)
// Expected
// 'boolean'

// myFunction({})
// Expected
// 'object'

// myFunction(null)
// Expected
// 'object'

// myFunction('string')
// Expected
// 'string'

// myFunction(['array'])
// Expected
// 'object'

const returnType = (el:any):any => typeof el;

console.log(returnType(['array']));

// Task 3--------------------------

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

// myFunction(2, 3)
// Expected
// false

// myFunction(3, 3)
// Expected
// true

// myFunction(1, '1')
// Expected
// false

// myFunction('10', '10')
// Expected
// true

const identical = (a:any, b:any):boolean => a === b;

console.log(identical(3, 3));

// Task 4--------------------------

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

// myFunction('abcd',1)
// Expected
// 'a'

// myFunction('zyxbwpl',5)
// Expected
// 'w'

// myFunction('gfedcba',3)
// Expected
// 'e'

const anyLetter = (a:string, n:number):string => {
    const returnChar = n - 1;
    return a.charAt(returnChar);
};

console.log(anyLetter('zyxbwpl', 5));

// Task 5--------------------------

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'defg'

// myFunction('1234')
// Expected
// '4'

// myFunction('fgedcba')
// Expected
// 'dcba'

const removeChars = (a:string):string => a.substring(3);

console.log(removeChars('fgedcba'));

// Task 6--------------------------

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// myFunction('abcdefg')
// Expected
// 'efg'

// myFunction('1234')
// Expected
// '234'

// myFunction('fgedcba')
// Expected
// 'cba'

const lastChars = (a:string):string => a.slice(-3);

console.log(lastChars('abcdefg'));

// Task 7--------------------------

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'abc'

// myFunction('1234')
// Expected
// '123'

// myFunction('fgedcba')
// Expected
// 'fge'

const firstChars = (a:string):string => a.slice(0, 3);

console.log(firstChars('fgedcba'));

// Task 8--------------------------

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// myFunction('abcdefgh')
// Expected
// 'abcd'

// myFunction('1234')
// Expected
// '12'

// myFunction('gedcba')
// Expected
// 'ged'

const halfChars = (a:string):string => {
    const halfCharsArr:number = a.split('').length;
    const halfNum:number = halfCharsArr / 2;
    return a.slice(0, halfNum);
};

console.log(halfChars('abcdefgh'));

// Task 9--------------------------

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'abcd'

// myFunction('1234')
// Expected
// '1'

// myFunction('fgedcba')
// Expected
// 'fged'

const removeLastChars = (a:string):string => a.slice(0, -3);

console.log(removeLastChars('abcdefg'));

// Task 10--------------------------

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

// myFunction(100,50)
// Expected
// 50

// myFunction(10,1)
// Expected
// 0.1

// myFunction(500,25)
// Expected
// 125

// eslint-disable-next-line no-mixed-operators
const calculatePercent = (a: number, b: number): number => a * b / 100;

console.log(calculatePercent(10, 1));

// Task 11--------------------------

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

// myFunction(6,5,4,3,2,1)
// Expected
// 10.5

// myFunction(6,2,1,4,2,3)
// Expected
// 2744

// myFunction(2,3,6,4,2,3)
// Expected
// -8

const calculations = (a:number, b:number, c:number, d: number, e:number, f:number):number => {
    const firstCalculate = a + b;
    const secondCalculate = firstCalculate - c;
    const thirdCalculate = secondCalculate * d;
    const fourthCalculate = thirdCalculate / e;
    return fourthCalculate ** f;
};

console.log(calculations(2, 3, 6, 4, 2, 3));

// Task 12--------------------------

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

// myFunction(10)
// Expected
// true

// myFunction(-4)
// Expected
// true

// myFunction(5)
// Expected
// false

// myFunction(-111)
// Expected
// false

const isEven = (n:number):boolean => n % 2 === 0;

console.log(isEven(4));

// Task 13--------------------------

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

// myFunction('m', 'how many times does the character occur in this sentence?')
// Expected
// 2

// myFunction('h', 'how many times does the character occur in this sentence?')
// Expected
// 4

// myFunction('?', 'how many times does the character occur in this sentence?')
// Expected
// 1

// myFunction('z', 'how many times does the character occur in this sentence?')
// Expected
// 0

const howMany = (a:string, b:string):number => b.split(a).length - 1;

console.log(howMany('h', 'how many times does the character occur in this sentence?'));

// Task 14--------------------------

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// myFunction(4)
// Expected
// true

// myFunction(1.123)
// Expected
// false

// myFunction(1048)
// Expected
// true

// myFunction(10.48)
// Expected
// false

const isWhole = (a:number):boolean => a % 2 === 0;

console.log(isWhole(4));

// Task 15--------------------------

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// myFunction(10, 100)
// Expected
// 0.1

// myFunction(90, 45)
// Expected
// 4050

// myFunction(8, 20)
// Expected
// 0.4

// myFunction(2, 0.5)
// Expected
// 1

const ifSmaller = (a:number, b:number):number => {
    if (a < b) {
        return a / b;
    }
    return a * b;
};

console.log(ifSmaller(90, 45));

// Task 16--------------------------

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// myFunction('cheese', 'cake')
// Expected
// 'cheesecake'

// myFunction('lips', 's')
// Expected
// 'slips'

// myFunction('Java', 'script')
// Expected
// 'Javascript'

// myFunction(' think, therefore I am', 'I')
// Expected
// 'I think, therefore I am'

const concatString = (a: string, b: string): string => {
    if (a.includes(b)) {
        return `${b}${a}`;
    }
    return `${a}${b}`;
};

console.log(concatString(' think, therefore I am', 'I'));

// Task 17--------------------------

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

// myFunction(2.12397)
// Expected
// 2.12

// myFunction(3.136)
// Expected
// 3.14

// myFunction(1.12397)
// Expected
// 1.12

// myFunction(26.1379)
// Expected
// 26.14

const roundNumber = (a:number):number => parseFloat(a.toFixed(2));

console.log(roundNumber(3.136));

// Task 18--------------------------

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

// myFunction(10)
// Expected
// [1,0]

// myFunction(931)
// Expected
// [9,3,1]

// myFunction(193278)
// Expected
// [1,9,3,2,7,8]

const numToArr = (a:number):number[] => {
    const numToStr = a.toString();
    const strToArr = numToStr.split('').map(Number);
    return strToArr;
};

console.log(numToArr(193278));

// Task 19--------------------------

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

// myFunction('java', 'tpi%rcs')
// Expected
// 'Javascript'

// myFunction('c%ountry', 'edis')
// Expected
// 'Countryside'

// myFunction('down', 'nw%ot')
// Expected
// 'Downtown'

const strClear = (a:string, b:string):string => {
    const deleteCharsA = a.replace(/[&\\/\\#,+()$~%'":*?<>{}|]/g, '');
    const deleteCharsB = b.replace(/[&\\/\\#,+()$~%'":*?<>{}|]/g, '');
    const reverseChars = deleteCharsB.split('').reverse().join('');
    const capitalize = deleteCharsA[0].toUpperCase() + deleteCharsA.slice(1);
    return `${capitalize}${reverseChars}`;
};

console.log(strClear('down', 'nw%ot'));

// Task 20--------------------------

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// myFunction(38)
// Expected
// 41

// myFunction(7)
// Expected
// 7

// myFunction(115)
// Expected
// 127

// myFunction(2000)
// Expected
// 2003

const primeNumber = (a:number):number => {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return primeNumber(a + 1);
        }
    }
    return a;
};

console.log(primeNumber(115));

// Task 21--------------------------

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// myFunction(1, 23)
// Expected
// 23

// myFunction(23, 23)
// Expected
// 23

// myFunction(7, 3)
// Expected
// 9

// myFunction(-5, 7)
// Expected
// 0

const findDivisble = (x:number, y:number):number => Math.floor((x + y - 1) / y) * y;

console.log(findDivisble(23, 23));

// Task 22--------------------------

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// myFunction('1234567','.')
// Expected
// '1.234.567'

// myFunction('abcde','$')
// Expected
// 'ab$cde'

// myFunction('zxyzxyzxyzxyzxyz','w')
// Expected
// 'zwxyzwxyzwxyzwxyzwxyz'

const insertChar = (a:string, b:string):string => {
    const strToArr = a.split('');
    for (let i = strToArr.length - 3; i > 0; i -= 3) {
        strToArr.splice(i, 0, b);
    }
    return strToArr.join('');
};

console.log(insertChar('zxyzxyzxyzxyzxyz', 'w'));

// Task 23--------------------------

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// myFunction('bnchmf')
// Expected
// 'coding'

// myFunction('bgddrd')
// Expected
// 'cheese'

// myFunction('sdrshmf')
// Expected
// 'testing'

const nextLetter = (a:string):string => {
    let strOut = '';
    for (let i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) > 96) {
            strOut += String.fromCharCode(a.charCodeAt(i) + 1);
        }
    }
    return strOut;
};

console.log(nextLetter('bnchmf'));

// Task 24--------------------------

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

// myFunction([1,2,3,4,5],3)
// Expected
// 3

// myFunction([10,9,8,7,6],5)
// Expected
// 6

// myFunction([7,2,1,6,3],1)
// Expected
// 7

const nthEl = (a:number[], n:number):number => a[n - 1];

console.log(nthEl([10, 9, 8, 7, 6], 5));

// Task 25--------------------------

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

// myFunction([1,2,3,4])
// Expected
// [4]

// myFunction([5,4,3,2,1,0])
// Expected
// [2,1,0]

// myFunction([99,1,1])
// Expected
// []

const removeEl = (a:number[]):number[] => a.splice(3);

console.log(removeEl([99, 1, 1]));

// Task 26--------------------------

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

// myFunction([1,2,3,4])
// Expected
// [2,3,4]

// myFunction([5,4,3,2,1,0])
// Expected
// [2,1,0]

// myFunction([99,1,1])
// Expected
// [99,1,1]

const getLastEl = (a:number[]):number[] => a.slice(-3);

console.log(getLastEl([5, 4, 3, 2, 1, 0]));

// Task 27--------------------------

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// myFunction([1,2,3,4])
// Expected
// [1,2,3]

// myFunction([5,4,3,2,1,0])
// Expected
// [5,4,3]

// myFunction([99,1,1])
// Expected
// [99,1,1]

const getFirstEl = (a:number[]):number[] => a.slice(0, 3);

console.log(getFirstEl([1, 2, 3, 4]));

// Task 28--------------------------

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

// myFunction([1, 2, 3, 4, 5], 2)
// Expected
// [ 4, 5 ]

// myFunction([1, 2, 3], 6)
// Expected
// [ 1, 2, 3 ]

// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
// Expected
// [ 6, 7, 8 ]

const getLastNthEl = (a:number[], n:number):number[] => a.slice(-n);

console.log(getLastNthEl([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Task 29--------------------------

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// myFunction([1,2,3], 2)
// Expected
// [1, 3]

// myFunction([1,2,'2'], '2')
// Expected
// [1, 2]

// myFunction([false,'2',1], false)
// Expected
// ['2', 1]

// myFunction([1,2,'2',1], 1)
// Expected
// [2, '2']

const deleteEl = (a:any[], b:any):any[] => {
    const newArr = a.filter((el) => el !== b);
    return newArr;
};

console.log(deleteEl([1, 2, '2', 1], 1));

// Task 30--------------------------

// Write a function that takes an array (a) as argument
// Return the number of elements in a

// myFunction([1,2,2,4])
// Expected
// 4

// myFunction([9,9,9])
// Expected
// 3

// myFunction([4,3,2,1,0])
// Expected
// 5

const howMatch = (a:number[]):number => a.length;

console.log(howMatch([4, 3, 2, 1, 0]));

// Task 31--------------------------

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// myFunction([1,-2,2,-4])
// Expected
// 2

// myFunction([0,9,1])
// Expected
// 0

// myFunction([4,-3,2,1,0])
// Expected
// 1

const findNegative = (a:number[]):number => {
    const negative = a.filter((el) => el < 0);
    return negative.length;
};

console.log(findNegative([1, -2, 2, -4]));

// Task 32--------------------------

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

// myFunction([1,3,2])
// Expected
// [3,2,1]

// myFunction([4,2,3,1])
// Expected
// [4,3,2,1]

const sortedNums = (a:number[]):number[] => a.sort().reverse();

console.log(sortedNums([4, 2, 3, 1]));

// Task 33--------------------------

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

// myFunction(['b', 'c', 'd', 'a'])
// Expected
// ['a', 'b', 'c', 'd']

// myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
// Expected
// ['a', 'a', 'c', 'd', 'w', 'y', 'z']

const sortedLetter = (a:string[]):string[] => a.sort();

console.log(sortedLetter(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// Task 34--------------------------

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// myFunction([10,100,40])
// Expected
// 50

// myFunction([10,100,1000])
// Expected
// 370

// myFunction([-50,0,50,200])
// Expected
// 50

const averageSum = (nums:number[]):number => {
    const summ = nums.reduce((a, b) => a + b, 0);
    return summ / nums.length;
};

console.log(averageSum([-50, 0, 50, 200]));

// Task 35--------------------------

// Write a function that takes an array of strings as argument
// Return the longest string

// myFunction(['help', 'me'])
// Expected
// 'help'

// myFunction(['I', 'need', 'candy'])
// Expected
// 'candy'

const findLongest = (a:string[]):string => {
    let wordLength = 0;
    let longest;
    for (let i = 0; i < a.length; i++) {
        wordLength = a[1].length;
        if (a[i].length > wordLength) {
            longest = a[i];
        }
    }
    return longest;
};

console.log(findLongest(['I', 'need', 'candy']));

// Task 36--------------------------

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// myFunction([true, true, true, true])
// Expected
// true

// myFunction(['test', 'test', 'test'])
// Expected
// true

// myFunction([1,1,1,2])
// Expected
// false

// myFunction(['10',10,10,10])
// Expected
// false

const isEqual = (a:any[]):boolean => {
    for (let i = 0; i < a.length; i++) if (a[i] !== a[0]) return false;
    return true;
};

console.log(isEqual([true, true, true, 'true']));

// Task 37--------------------------

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// myFunction([1, 2, 3], [4, 5, 6])
// Expected
// [1, 2, 3, 4, 5, 6]

// myFunction(['a', 'b', 'c'], [4, 5, 6])
// Expected
// ['a', 'b', 'c', 4, 5, 6]

// myFunction([true, true], [1, 2], ['a', 'b'])
// Expected
// [true, true, 1, 2, 'a', 'b']

const moreArguments = (...args:any[]):any[] => [].concat(...args);

console.log(moreArguments([true, true], [1, 2], ['a', 'b']));

// Task 38--------------------------

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// myFunction([{a:1,b:2},{a:5,b:4}])
// Expected
// [{a:1,b:2},{a:5,b:4}]

// myFunction([{a:2,b:10},{a:5,b:4}])
// Expected
// [{a:5,b:4},{a:2,b:10}]

// myFunction([{a:1,b:7},{a:2,b:1}])
// Expected
// [{a:2,b:1},{a:1,b:7}]

const sortByAscending = (arr:any[]):any[] => {
    arr.sort((first, second) => parseFloat(first.b) - parseFloat(second.b));
    return arr;
};

console.log(sortByAscending([{ a: 2, b: 10 }, { a: 5, b: 4 }]));

// Task 39--------------------------

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// myFunction([1, 2, 3], [3, 4, 5])
// Expected
// [ 1, 2, 3, 4, 5 ]

// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
// Expected
// [ -11, -10, 5, 22, 41,  42, 333]

const removeDuplicate = (arr1:number[], arr2:number[]):number[] => {
    const mergeArr = [...arr1, ...arr2];
    const findDuplicate = mergeArr.filter((el, index) => mergeArr.indexOf(el) === index);
    return findDuplicate.sort((a, b) => a - b);
};

console.log(removeDuplicate([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// Task 40--------------------------

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// myFunction([1, 2, 3, 4, 5, 6, 7], 2)
// Expected
// 25

// myFunction([-10, -11, -3, 1, -4], -3)
// Expected
// 1

// myFunction([78, 99, 100, 101, 401], 99)
// Expected
// 602

const sumGreaterEl = (arr:number[], num:number):number => {
    const checkGreaterEl = arr.filter((el) => el > num);
    return checkGreaterEl.reduce((a, b) => a + b);
};

console.log(sumGreaterEl([1, 2, 3, 4, 5, 6, 7], 2));

// Task 41--------------------------

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

// myFunction(2, 10)
// Expected
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

// myFunction(1, 3)
// Expected
// [1, 2, 3]

// myFunction(-5, 5)
// Expected
// [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]

// myFunction(2, 7)
// Expected
// [2, 3, 4, 5, 6, 7]

const fromMinToMax = (min:number, max:number):number[] => {
    const arr = Array(max - min + 1).fill(max).map((num, index) => min + index);
    return arr;
};
console.log(fromMinToMax(-5, 5));

// Task 42--------------------------

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// myFunction(['Alf', 'Alice', 'Ben'])
// Expected
// { a: ['Alf', 'Alice'], b: ['Ben']}

// myFunction(['Ant', 'Bear', 'Bird'])
// Expected
// { a: ['Ant'], b: ['Bear', 'Bird']}

// myFunction(['Berlin', 'Paris', 'Prague'])
// Expected
// { b: ['Berlin'], p: ['Paris', 'Prague']}

const groupByFirstLetter = (a: any[]): { [key: string]: string[] } => a.reduce((acc, curr) => {
    const firstLetter = curr[0].toLowerCase();
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(curr);
    return acc;
}, {});

console.log(groupByFirstLetter(['Alf', 'Alice', 'Ben']));

// Task 43--------------------------

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// myFunction([1,2,3], 6)
// Expected
// [6,1,2,3]

// myFunction(['a','b'], 2)
// Expected
// [0,'a','b']

// myFunction([null,false], 11)
// Expected
// [11,null,false]

const numberToArray = (arr: any[], num:number) => {
    if (num < 6) {
        arr.unshift(0);
    } else arr.unshift(num);
    return arr;
};

console.log(numberToArray([1, 2, 3], 6));

// Task 44--------------------------

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// myFunction([1,2,3,4,5,6,7,8,9,10],3)
// Expected
// [3,6,9]

// myFunction([10,9,8,7,6,5,4,3,2,1],5)
// Expected
// [6,1]

// myFunction([7,2,1,6,3,4,5,8,9,10],2)
// Expected
// [2,6,4,8,10]
// a[n - 1]

const nthOfElements = (a:number[], n:number):number[] => {
    const newArr = a.filter((el, index) => !((index + 1) % n));
    return newArr;
};

console.log(nthOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// Task 45--------------------------

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// myFunction({  continent: 'Asia',  country: 'Japan'})
// Expected
// 'Japan'

// myFunction({  country: 'Sweden',  continent: 'Europe'})
// Expected
// 'Sweden'

const getCountry = (obj:any):string => obj.country;

console.log(getCountry({ country: 'Sweden', continent: 'Europe' }));

// Task 46--------------------------

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

// myFunction({  one: 1,  'prop-2': 2})
// Expected
// 2

// myFunction({  'prop-2': 'two',  prop: 'test'})
// Expected
// 'two'

const getProp = (obj:any):string => obj['prop-2'];

console.log(getProp({ 'prop-2': 'two', prop: 'test' }));

// Task 47--------------------------

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
// Expected
// 'Asia'

// myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
// Expected
// 'Sweden'

const getObjectValue = (obj:any, value:string):string => obj[value];

console.log(getObjectValue({ country: 'Sweden', continent: 'Europe' }, 'country'));

// Task 48--------------------------

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// myFunction({a:1,b:2,c:3},'b')
// Expected
// true

// myFunction({x:'a',y:'b',z:'c'},'a')
// Expected
// false

// myFunction({x:'a',y:'b',z:'c'},'z')
// Expected
// true

const checkObject = (a:any, b:string):boolean => {
    if (typeof a[b] !== 'undefined') return true;
    else return false;
};

console.log(checkObject({ x: 'a', y: 'b', z: 'c' }, 'z'));

// Task 49--------------------------

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

// myFunction('a')
// Expected
// {key:'a'}

// myFunction('z')
// Expected
// {key:'z'}

// myFunction('b')
// Expected
// {key:'b'}

const createObject = (a:string):object => {
    const newObj = { key: a };
    return newObj;
};

console.log(createObject('b'));

// Task 50-------------------------

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// myFunction('a','b')
// Expected
// {a:'b'}

// myFunction('z','x')
// Expected
// {z:'x'}

// myFunction('b','w')
// Expected
// {b:'w'}

const createNewObject = (a:string, b:string):object => {
    const newObj = { [a]: b };
    return newObj;
};

console.log(createNewObject('b', 'w'));

// Task 51-------------------------

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

// myFunction(['a','b','c'],[1,2,3])
// Expected
// {a:1,b:2,c:3}

// myFunction(['w','x','y','z'],[10,9,5,2])
// Expected
// {w:10,x:9,y:5,z:2}

// myFunction([1,'b'],['a',2])
// Expected
// {1:'a',b:2}

const arrToObj = (a:string[], b:number[]):object => {
    const newObj:any = {};
    for (let i = 0; i < a.length; i++) { newObj[a[i]] = b[i]; }
    return newObj;
};

console.log(arrToObj(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));

// Task 52-------------------------

// Write a function that takes an object (a) as argument
// Return an array with all object keys

// myFunction({a:1,b:2,c:3})
// Expected
// ['a','b','c']

// myFunction({j:9,i:2,x:3,z:4})
// Expected
// ['j','i','x','z']

// myFunction({w:15,x:22,y:13})
// Expected
// ['w','x','y']

const getKeys = (a:object):string[] => {
    const newArr = Object.keys(a);
    return newArr;
};

console.log(getKeys({
    j: 9, i: 2, x: 3, z: 4,
}));

// Task 53-------------------------

// Write a function that takes an object (a) as argument
// Return the sum of all object values

// myFunction({a:1,b:2,c:3})
// Expected
// 6

// myFunction({j:9,i:2,x:3,z:4})
// Expected
// 18

// myFunction({w:15,x:22,y:13})
// Expected
// 50

const sumValues = (a:object):number => {
    const newArr = Object.values(a);
    return newArr.reduce((acc, b) => acc + b);
};

console.log(sumValues({
    j: 9, i: 2, x: 3, z: 4,
}));

// Task 54-------------------------

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// myFunction({ a: 1, b: 7, c: 3 })
// Expected
// { a: 1, c: 3 }

// myFunction({ b: 0, a: 7, d: 8 })
// Expected
// { a: 7, d: 8 }

// myFunction({ e: 6, f: 4, b: 5, a: 3 })
// Expected
// { e: 6, f: 4, a: 3 }

const deleteKeys = (a:any):any => {
    const copyObj = { ...a };
    delete copyObj.b;
    return copyObj;
};

console.log(deleteKeys({ b: 0, a: 7, d: 8 }));

// Task 55-------------------------

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
// Expected
// { a: 1, b: 2, c: 3, e: 5, d: 4}

// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
// Expected
// { a: 5, b: 4, c: 3, e: 2, d: 1}

const removeFromSecondObj = (first:any, second:any):any => {
    let str = JSON.stringify(second);
    str = str.replace(/b/g, 'd');
    second = JSON.parse(str);
    return { ...first, ...second };
};

console.log(removeFromSecondObj({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));

// Task 56-------------------------

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

// myFunction({a:1,b:2,c:3},3)
// Expected
// {a:3,b:6,c:9}

// myFunction({j:9,i:2,x:3,z:4},10)
// Expected
// {j:90,i:20,x:30,z:40}

// myFunction({w:15,x:22,y:13},6)
// Expected
// {w:90,x:132,y:78}

const multiplyObjectValues = (a:any, b:number):any => {
    for (const key in a) {
        if (typeof a[key] === 'number') {
            a[key] *= b;
        }
    } return a;
};

console.log(multiplyObjectValues({ w: 15, x: 22, y: 13 }, 6));

// Task 57-------------------------

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// myFunction({z:'a',y:'b',x:'c',w:'d'})
// Expected
// {a:'z',b:'y',c:'x',d:'w'}

// myFunction({2:'a',4:'b',6:'c',8:'d'})
// Expected
// {a:'2',b:'4',c:'6',d:'8'}

// myFunction({a:1,z:24})
// Expected
// {1:'a',24:'z'}

const swapValues = (obj:any):any => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

console.log(swapValues({
    2: 'a', 4: 'b', 6: 'c', 8: 'd',
}));

// Task 58-------------------------

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// myFunction({ a: 'a', b: 'b', c: '' })
// Expected
// { a: 'a', b: 'b', c: null }

// myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
// Expected
// { a: null, b: 'b', c: null, d: 'd' }

// myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
// Expected
// { a: 'a', b: 'b ', c: null, d: null }

const checkEmpty = (obj:any):any => Object.fromEntries(Object.entries(obj).map(([key, value]) => {
    if (value.toString().trim() === '') {
        return [key, null];
    } else {
        return [key, value];
    }
}));

console.log(checkEmpty(({
    a: '', b: 'b', c: ' ', d: 'd',
})));

// Task 59-------------------------

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
// Expected
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

// myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
// Expected
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}

// myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
// Expected
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

// myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
// Expected
// {fn: 'Matthew', ln: 'Müller'}

const personalInfo = (obj:any):any => {
    interface newObject {
        fn: string;
        ln: string;
        weight?: string;
        size?: string;
    }
    for (const key in obj) {
        if (key === 'size' || key === 'weight') {
            key === 'size' ? obj[key] += 'cm' : key === 'weight' ? obj[key] += 'kg' : obj;
        } else {
            obj;
        }
    }
    const {
        fn, ln, size, weight,
    } = obj;
    let newObj:newObject = {
        fn, ln, size, weight,
    };
    if (size !== undefined || weight !== undefined) {
        if (size !== undefined && weight === undefined) {
            newObj = { fn, ln, size };
        } else if (weight !== undefined && size === undefined) {
            newObj = { fn, ln, weight };
        } else {
            newObj;
        }
    } else {
        newObj = { fn, ln };
    }
    return newObj;
};

console.log(personalInfo({
    fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102,
}));

// Task 60-------------------------

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// eslint-disable-next-line max-len
// myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
// Expected
// eslint-disable-next-line max-len
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

// eslint-disable-next-line max-len
// myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
// Expected
// eslint-disable-next-line max-len
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

const addContinent = (arr:object[], str:string):object[] => {
    const newArr = arr.map((v) => ({ ...v, continent: str }));
    return newArr;
};

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));

// Task 61-------------------------

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// myFunction([1,2,2,3])
// Expected
// {1:1,2:2,3:1}

// myFunction([9,9,9,99])
// Expected
// {9:3,99:1}

// myFunction([4,3,2,1])
// Expected
// {1:1,2:1,3:1,4:1}

const arrayToObject = (arr:number[]):any => {
    const obj = arr.reduce((acc:any, v:any) => (acc[v] ? ++acc[v] : acc[v] = 1, acc), {});
    return obj;
};

console.log(arrayToObject([1, 2, 2, 3]));

// Task 62-------------------------

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
// Expected
// false

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// true

// myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// false

const checkDates = (a:Date, b:Date):boolean => b.valueOf() === a.valueOf();

console.log(checkDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));

// Task 63-------------------------

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
// Expected
// 10

// myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
// Expected
// 7457

const getDaysNumber = (a:Date, b:Date):number => {
    const oneDay = 1000 * 60 * 60 * 24;
    const calculateTime = b.getTime() - a.getTime();
    return Math.round(calculateTime / oneDay);
};

console.log(getDaysNumber(new Date('2000-01-01'), new Date('2020-06-01')));

// Task 64-------------------------

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
// Expected
// true

// myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
// Expected
// false

// myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
// Expected
// false

// myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
// Expected
// false

const checkDate = (a:Date, b:Date):boolean => b.valueOf() === a.valueOf();

console.log(checkDate(new Date('2000/01/01'), new Date('2000/01/01')));
