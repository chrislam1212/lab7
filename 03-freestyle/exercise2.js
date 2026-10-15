// Task: Write a JavaScript program to count of the specified element in an array. 

const count = (input_array, character) => {
    counter = 0
    for (e of input_array) {
        if (e == character){
            counter = counter + 1;
        }
    }
    return counter
}

// DO NOT EDIT THE CODE BELOW
// Test Cases
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(count(arr1, 'a'))
console.log(count(arr1, 2))

// Expected Output: 
// 5
// 2