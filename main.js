"use strict"
;
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findWile(arr, val) {
    let min = 0;
    let max = arr.length;
    let midle = Math.floor((min + max) / 2);
    let stepCount = 0;

    while (min < max) {
        stepCount++;
        if (val === arr[midle]) {
             return console.log(`(W)Count of steps: ${stepCount}; Index of Value: ${midle};`);
        } else {
            if (val <= [midle]) {  //кто блять знал, что нужно еще и отнимать и добавлять к среднему значению, иначе при значении не входящем в масив будет бесконечный цикл
                max = midle - 1;
            } else {
                min = midle + 1;
            }

        }
        midle = Math.floor((min + max) / 2);
    }
    return console.log("(W)Out of range ");
}
console.group(`function with "while"`);

findWile(arr, 0);
findWile(arr, 3);
findWile(arr, 5);
findWile(arr, 10);
findWile(arr, "a");
findWile(arr, 144);
console.groupEnd();


function findFor(arr, val) {
    let min = 0;
    let max = arr.length;
    let midle = Math.floor((min + max) / 2);
    let stepCount = 0;

    for (let i = 0; i <= arr.length; i++) { //если задать вместо arr.length -> max то не работает со заначением "0"!
        stepCount++;
        if (val === arr[midle]) {
            return console.log(`(F)Count of steps: ${stepCount}; Index of Value: ${midle};`);
        } else {
            if (val <= arr[midle]) {
                max = midle;
            } else {
                min = midle;
            }
        }
        midle = Math.floor((min + max) / 2);
    }

    return console.log("(F)Out of range");

}
console.group(`function with "for"`);
findFor(arr, 0);
findFor(arr, 3);
findFor(arr, 5);
findFor(arr, 10);
findFor(arr, "a");
findFor(arr, 11);
console.groupEnd();







