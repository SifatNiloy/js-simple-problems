const numbers = [22, 52, 75, 98, 32, 65, 76, 43];
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        sum = sum + element;

    }
    return sum;

}

const total = arrayTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(total);



