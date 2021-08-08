function PositiveNumbers(array) {
    array2 = [];
    for (const number of array) {
        if (number > 0) {
            array2.push(number);
        }

    }
    console.log(array2);
}

PositiveNumbers([1, 2, 4, -6, 5, -7, -10, 12, -3, -4, 2]);