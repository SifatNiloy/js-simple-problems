// A = P(1 + rt)

// Where:

// A (total) = Total Accrued Amount (principal + interest)
// P = Principal Amount
// I = Interest Amount
// r = Rate of Interest per year in decimal; r = R/100
// R = Rate of Interest per year as a percent; R = r * 100
// t = Time Period involved in months or years

function simpleInterest(total) {
    r = R / 100;
    total = initial * (1 + r * t);
    interest = total - initial;
    return total;
}
var initial = 500;
var R = 1;
var t = 1;
var total = simpleInterest(1);
console.log("total amount", total);
console.log("interest is ", interest, "%");
