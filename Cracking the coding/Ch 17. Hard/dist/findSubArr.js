'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function findSubArr(arr) {
    if (!Array.isArray(arr)) throw 'an array needed';

    function hasEqualStrAndNum(start, end) {
        var count = 0;
        for (var i = start; i < end; i++) {
            if (typeof arr[i] === 'number') count++;else if (typeof arr[i] === 'string') count--;
        }

        return count === 0;
    }

    for (var len = arr.length; len > 1; len--) {
        for (var i = 0; i <= arr.length - len; i++) {
            if (hasEqualStrAndNum(i, i + len)) return arr.slice(i, i + len);
        }
    }return 'not found';
}

exports.default = findSubArr;