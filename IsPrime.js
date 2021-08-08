function IsPrime(number) {
    for (let i = 2; i <= (number - 1) / 2; i++) {
        if (number % i == 0) {
            console.log("not prime");

        }

        else {
            console.log(i);
        }

    }
}

IsPrime(75);