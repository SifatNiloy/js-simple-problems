function animalCount(miles) {
    const animalDensity10 = 10;
    const animalDensity20 = 50;
    const animalDensity30 = 70;
    if (miles <= 10) {
        const count = miles * animalDensity10;
        return count;
    }
    else if (miles <= 20) {
        const first10 = animalDensity10 * 10;
        const restmiles = miles - 10;
        const totalIn20 = first10 + restmiles * animalDensity20;
        return totalIn20;
    }
    else {
        const first10 = animalDensity10 * 10;
        const secondrest = miles - 10;
        const second10 = 10 * animalDensity20;
        const rest = miles - 20;
        const third10 = rest * animalDensity30;
        const totalIn30 = first10 + second10 + third10;
        return totalIn30;

    }
}

const animals = animalCount(25);
console.log(animals);