'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) throw 'need integers';
    if (a < 0 || b < 0) throw 'need positive integers';

    var bStrA = Number(a).toString(2),
        bStrB = Number(b).toString(2);
    var overflow = 0,
        sum = [];
    var map = {
        '000': 0,
        '001': 0,
        '010': 0,
        '011': 1,
        '100': 0,
        '101': 1,
        '110': 1,
        '111': 1
    };

    if (bStrA.length < bStrB.length) {
        ;

        var _ref = [bStrB, bStrA];
        bStrA = _ref[0];
        bStrB = _ref[1];
    }while (bStrB.length > 0) {
        var bita = bStrA[bStrA.length - 1],
            bitb = bStrB[bStrB.length - 1];
        if (overflow) {
            sum.push(bita ^ bitb ^ overflow);
        } else {
            sum.push(bita ^ bitb);
        }
        var seq = [overflow, bita, bitb].join('');
        overflow = map[seq];
        bStrA = bStrA.slice(0, bStrA.length - 1);
        bStrB = bStrB.slice(0, bStrB.length - 1);
    }

    if (overflow) {
        if (bStrA.length === 0) {
            sum.push(overflow);
        } else {
            while (overflow && bStrA.length) {
                var _bita = bStrA[bStrA.length - 1];
                sum.push(_bita ^ overflow);
                _bita & overflow ? overflow = 1 : overflow = 0;
                bStrA = bStrA.slice(0, bStrA.length - 1);
            }
        }
    }

    if (bStrA.length === 0) {
        if (overflow) {
            sum.push(overflow);
        }
    } else {
        sum.push(bStrA);
    }

    return parseInt(sum.reverse().join(''), 2);
}

exports.default = add;