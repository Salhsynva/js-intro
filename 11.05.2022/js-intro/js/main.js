// task-1
function FindMaxNumber(...numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(`max number: ${FindMaxNumber(23, 34, 1223, 36)}`)

// task-2
function FindEvenNumbersSum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

console.log(`sum of even numbers: ${FindEvenNumbersSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`)

// task-3
function Power(num1, num2) {
    result = 1;
    if(num2 >= 0)
    {
        for (let i = 0; i < num2; i++) {
            result *= num1;
        }
    }else if(num2 < 0)
    {
        for (let i = 0; i > num2; i--) {
            result*=1/num1;
        }
    }
    return result;
}

do {
    var num1 = prompt("first number:");
} while (isNaN(num1))

do {
    var num2 = prompt("second number:");
} while (isNaN(num2))

alert(`result: ${Power(num1, num2)}`)


