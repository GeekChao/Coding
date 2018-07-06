'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function count2sInRange(n) {
    if (!Number.isInteger(n) || n < 0) throw 'need a positive integer';

    var count = 0;
    for (var i = 0; i <= n; i++) {
        count += count2s(i);
    }

    function count2s(num) {
        var count = 0;
        while (num > 0) {
            if (num % 10 === 2) count++;
            num = Math.floor(num / 10);
        }
        return count;
    }

    return count;
}

exports.default = count2sInRange;