exports.min = function min(array) {
    if (array && !undefined && arguments && array.length != 0) {
        let minResult;
        array.sort((a, b) => a - b);
        return (minResult = array[0]);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array && !undefined && arguments && array.length != 0) {
        let maxResult;
        array.sort((a, b) => b - a);
        return (maxResult = array[0]);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && !undefined && arguments) {
        return array.reduce((sum, cur) => {
            return Math.round((sum + cur / array.length) * 100) / 100;
        }, 0);
    } else {
        return 0;
    }
};
