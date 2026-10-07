const sumAll = function(int1, int2) {
    if (!Number.isInteger(int1) ||
        !Number.isInteger(int2) ||
        int1 <= 0 ||
        int2 <= 0
    ) return "ERROR";

    let int_lo = int1 < int2 ? int1 : int2;
    let int_hi = int1 > int2 ? int1 : int2;
    let sum = 0;
    for (let n = int_lo; n <= int_hi; ++n) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
