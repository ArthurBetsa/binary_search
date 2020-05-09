"use strict"
;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let letters = ["a", "b", "c", "d", "e", "f"];
const forbidden_paswords = ["1234", "12345", "654321", "qwerty", "password", "qazwsx"];


function findWile(arr, val) {
    let result = false;
    let min = 0;
    let max = arr.length;
    let middle;
    let stepCount = 0;

    while (min <= max && !result) {
        middle = Math.floor((min + max) / 2);
        console.log("min: ", min);
        console.log("max: ", max);

        stepCount++;
        if (val === arr[middle]) {
            result++;
            return console.log(`(W)Count of steps: ${stepCount}; Value: ${val} founded in index: ${middle};`);
        } else {
            if (val < arr[middle]) {  //кто блять знал, что нужно еще и отнимать и добавлять к среднему значению, иначе при значении не входящем в масив будет бесконечный цикл
                max = middle - 1;
            } else {
                min = middle + 1;
            }

        }

    }
    return console.log("(W)Out of range ");
}

//
// console.group(`function with "while"`);
//
// findWile(numbers, 0);
// findWile(numbers, -1);
// findWile(numbers, 3);
// findWile(numbers, 5);
// findWile(numbers, 10);
// findWile(letters, "a");
// findWile(letters, "c");
// findWile(letters, "d");
// findWile(numbers, 144);
// console.groupEnd();


function findFor(arr, val) {
    let min = 0;
    let max = arr.length;
    let middle = Math.floor((min + max) / 2);
    let stepCount = 0;

    for (let i = 0; i <= arr.length; i++) { //если задать вместо arr.length -> max то не работает со заначением "0"!
        stepCount++;
        if (val === arr[middle]) {
            return console.log(`(F)Count of steps: ${stepCount}; Value: ${val} founded in index of ${middle}`);
        } else if (val <= arr[middle]) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }

        middle = Math.floor((min + max) / 2);
    }

    return console.log("(F)Out of range");

}

// console.group(`function with "for"`);
// findFor(numbers, 0);
// // findFor(numbers, 3);
// findFor(numbers, 5);
// // findFor(numbers, 10);
// findFor(numbers, "a");
// findFor(numbers, 11);
// console.groupEnd();
// findFor(forbidden_paswords, "1234");

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let letters = ["a", "b", "c", "d", "e", "f"];

function findByRecursion(arr, val) {
    let min = 0;
    let max = arr.length;
    let middle;
    let stepCount = 0;
    let result = false;

    function find(min, max) {
        stepCount++;
        middle = Math.floor((min + max) / 2);

        if (min > max || max < min) {
            return result;
        }
        if (val === arr[middle]) {
            return result++;
        }
        if (val <= arr[middle]) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
        find(min, max);
    }

    find(min, max);

    result
        ? console.log(`val: ${val} founded in index of: ${middle}, step: ${stepCount}.`)
        : console.log(`val: ${val} NOT founded, step: ${stepCount}.`)

}

// findByRecursion(letters, "a");
// findByRecursion(numbers, 112);