var arr = [1, 3, 5, 8, 6, 2, 6, 7, 6, 8, 9];
var arr2 = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1];
var pointer = 0; 
var count = 0; 
var currentReach = 0; 

function counts(arr){
    for (let i = 0; i < arr.length - 1; i++) {
    pointer = Math.max(pointer, i + arr[i]);    
    if (pointer >= arr.length - 1) {
        count++;
        break;
    }
    if (i === currentReach) {
        count++;
        currentReach = pointer;
        if (currentReach <= i) {
            count = -1;
            break;
        }
    }
}
console.log(count, "count");
}
counts(arr)
counts(arr2)
