
exports.min = function min (array) {
    if (!arguments.length || !array.length) {
        return 0;
    }
    return Math.min(...array);
}

exports.max = function max (array) {
    if (!arguments.length || !array.length) {
        return 0;
    }
    return Math.max(...array);
}

exports.avg = function avg (array) {
    if(!arguments.length || !array.length){
        return 0
    }

    return array.reduce((total, amount, index, array) => {
        total += amount;
        if( index === array.length - 1 ) {
            return total/array.length;
        } else {
            return total;
        }
    });
}
