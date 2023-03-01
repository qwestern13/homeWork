function multuply(multiplier1, multiplier2) {
    let bigMultiplier1 = BigInt(multiplier1);
    let bigMultiplier2 = BigInt(multiplier2);
    
    return bigMultiplier1 * bigMultiplier2;
  }

function division(divisible, divider) {
    if (divider == 0) {
        return "Division by zero";
    }
    else {
        let bigDivisible = BigInt(divisible);
        let bigDivider = BigInt(divider);
        return bigDivisible / bigDivider;
    }
}

function sum(summand1, summand2) {
    let bigSummand1 = BigInt(summand1);
    let bigSummand2 = BigInt(summand2);

    return bigSummand1 + bigSummand2;
}

function substraction(substract1, substract2) {
    let bigSubstract1 = BigInt(substract1);
    let bigSubstract2 = BigInt(substract2);

    return bigSubstract1 - bigSubstract2;
}
let tm = division(10098888, 1123);

console.log(tm);