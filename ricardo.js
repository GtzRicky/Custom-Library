const numbers = [4, 1, 3, 2, 3, 4, 5, 6, 7];

const ricardo = {};

// Método forEach

// function saludo() {
//     console.log('Hola');
// } 
// numbers.forEach(saludo);


// ARROW FUNCTION
// numbers.forEach(() => console.log('Hola')); 


// forEach CUSTOM METHOD

function customForEach(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

function printNumbers(element) {
    console.log(element);
}

// const newEach = customForEach(numbers, printNumbers);

// forEach CUSTOM METHOD W/ ARROW FUNCTION


ricardo.each = (array, fn) => {
    for(let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

// ricardo.each(numbers, printNumbers);


// filter CUSTOM METHOD

function customFilter(array, fn) {
    const data = [];
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            data.push(array[i]);
        }
    }
    return data;
}

function oddNumbers(element) {
    return element % 2 === 1;
}

const newFilter = customFilter(numbers, oddNumbers);
// console.log(newFilter);

// filter CUSTOM METHOD W/ ARROW FUNCTION

ricardo.filter = (array, fn) => {
    const data = [];
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            data.push(array[i]);
        }
    }
    console.log(data);
}

// ricardo.filter(numbers, oddNumbers);


// map CUSTOM METHOD

// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.

function customMap(array, fn) {
    const mapped = [];
    for(let i = 0; i < array.length; i++) {
        fn(array[i]);
        mapped.push(fn(array[i]));
    }
    return mapped;
}

function multiplyByFive(element) {
    return element * 5;
}

const newMapped = customMap(numbers, multiplyByFive);
// console.log(newMapped);

// map CUSTOM METHOD W/ ARROW FUNCTION

ricardo.map = (array, fn) => {
    const mapped = [];
    for(let i = 0; i < array.length; i++) {
        fn(array[i]);
        mapped.push(fn(array[i]));
    }
    console.log(mapped);
}

// ricardo.map(numbers, multiplyByFive);


// find CUSTOM METHOD

// The find() method returns the value of the first element in an array that pass a test (provided as a function).
// The find() method executes the function once for each element present in the array

function customFind(array, fn) {
    for(let i= 0; i < array.length; i++) {
        if(fn(array[i])) {
            return array[i];
        }
    }
}

function firstEven(element) {
    return element % 2 === 1;
} 

// const newFound = customFind(numbers, firstEven);
// console.log(newFound);

// find CUSTOM METHOD W/ ARROW FUNCTION

ricardo.find = (array, fn) => {
    for(let i= 0; i < array.length; i++) {
        if(fn(array[i])) {
            return array[i];
        }
    }
}

// console.log(ricardo.find(numbers, firstEven));

// findIndex CUSTOM METHOD

// The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
// The findIndex() method executes the function once for each element present in the array

function customFindIndex(array, fn) {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            const value = array[i];
            const index = array.indexOf(value);
            return index
        }
    }
}

function indexInArray(element) {
    return element === 2;
}

const newFoundIndex = customFindIndex(numbers, indexInArray);
// console.log('The number is in position ' + newFoundIndex);

// findIndex CUSTOM METHOD W/ ARROW FUNCTION

ricardo.findIndex = (array, fn) => {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            const value = array[i];
            const index = array.indexOf(value);
            return index
        }
    }
}

// console.log('Number in position ' + ricardo.findIndex(numbers, indexInArray));


// contains CUSTOM METHOD
// Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.

function customContains(array, fn) {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            return true;
        } else {
            return false;
        }
    }
}

function isThisInside(element) {
    return element === 9;
}

const newContain = customContains(numbers, isThisInside);
// console.log(newContain);

// contains CUSTOM METHOD  W/ ARROW FUNCTION

ricardo.contains = (array, fn) => {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            return true;
        } else {
            return false;
        }
    }
}

// console.log(ricardo.contains(numbers, isThisInside));


// pluck CUSTOM METHOD

// A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

let students = [{name: 'Ricardo', age: '27'}, {name: 'Girlany', age: '26'}, {name: 'Arturo', age: '27'}];

function customPluck(array, element) {
    const newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i][element])
    }
    return newArray
}

// const newPluck = customPluck(students, 'name');
// console.log(newPluck);

// pluck CUSTOM METHOD W/ ARROW FUNCTION

ricardo.pluck = (array, element) => {
    const newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i][element])
    }
    return newArray
}

// console.log(ricardo.pluck(students, 'name'));

