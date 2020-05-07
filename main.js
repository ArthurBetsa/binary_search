"use strict"
;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
let letters = ["a", "b", "c", "d", "e", "f"];

function findWile(arr, val) {
    let min = 0;
    let max = arr.length;
    let middle = Math.floor((min + max) / 2);
    let stepCount = 0;

    while (min < max) {
        stepCount++;
        if (val === arr[middle]) {
            return console.log(`(W)Count of steps: ${stepCount}; Index of Value: ${middle};`);
        } else {
            if (val <= arr[middle]) {  //кто блять знал, что нужно еще и отнимать и добавлять к среднему значению, иначе при значении не входящем в масив будет бесконечный цикл
                max = middle - 1;
            } else {
                min = middle + 1;
            }

        }
        middle = Math.floor((min + max) / 2);
    }
    return console.log("(W)Out of range ");
}

// console.group(`function with "while"`);
//
// findWile(numbers, 0);
// findWile(numbers, 3);
// findWile(numbers, 5);
// findWile(numbers, 10);
// findWile(numbers, "a");
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
        } else {
            if (val <= arr[middle]) {
                max = middle;
            } else {
                min = middle;
            }
        }
        middle = Math.floor((min + max) / 2);
    }

    return console.log("(F)Out of range");

}

// console.group(`function with "for"`);
// findFor(numbers, 0);
// findFor(numbers, 3);
// findFor(numbers, 5);
// findFor(numbers, 10);
// findFor(numbers, "a");
// findFor(numbers, 11);
// console.groupEnd();



function findByRecursion(arr, val) {
    let min = 0;
    let max = arr.length;
    let midle = Math.floor((min + max) / 2);
    let stepCount = 0;
    let result = false;

    function find(min, max) {
        stepCount++;
        if (!((max-1 === min || min+1 === max) && result === false  )|| max-1 ===0 ) {
            if (val === arr[midle]) {
                return result = arr[midle];
            } else {
                if (val <= arr[midle]) {
                    max = midle;
                } else {
                    min = midle;
                }
                midle = Math.floor((min + max) / 2);
                find(min, max);
            }
        } else {
            console.log("(F)Out of range");
            return false;
        }
    }

    find(min, max);

    !result
        ? console.log(`val: ${val} NOT founded`)
        : console.log(`val: ${val} founded in index of: ${midle}`)

}

findByRecursion(letters, "a");
findByRecursion(numbers, 0);

