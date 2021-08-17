var Negarr = [];
var Posarr = [];
function separate(arr) {

    for (let element of arr) {
        if (element < 0) {
            Negarr.push(element);

        }
        else {
            Posarr.push(element);

        }
    }
}

separate([1, 2, 4, -5, -7, 2, -13, -24, 8, 22]);
console.log(Negarr);
console.log(Posarr);